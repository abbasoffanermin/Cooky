import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Basket from '../../svgs/basket.svg';
import { SvgImage } from '../../components/SvgImage';
import { colors } from '../../styles/colors';
// import { MMKV } from 'react-native-mmkv';
import { data2 } from '../../mocks/data2';
import { OnBoarding } from '../../mocks/data';

// Initialize MMKV storage
// const storage = new MMKV();

export const Home = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const [refreshing, setRefreshing] = useState(false);

  // useEffect(() => {
  //   const savedFavorites = storage.getString('favorites');
  //   if (savedFavorites) {
  //     setFavorites(JSON.parse(savedFavorites));
  //   }
  // }, []);

  // const toggleHeart = (item) => {
  //   setFavorites((prevFavorites) => {
  //     const newFavorites = prevFavorites.some(fav => fav.id === item.id)
  //       ? prevFavorites.filter(fav => fav.id !== item.id)
  //       : [...prevFavorites, item];
  //     storage.set('favorites', JSON.stringify(newFavorites));
  //     return newFavorites;
  //   });
  // };

  const onRefresh = () => {
    setRefreshing(true);
    // Burada verileri yeniden yükle veya güncelle
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderCard = ({ item }) => (
    <View style={styles.card} key={item.id.toString()}>
      <Pressable
        style={styles.cardPress}
        onPress={() => navigation.navigate('Details', { item })}>
        <View style={styles.heartContainer}>
          <Pressable
            style={styles.heartPress}
            onPress={() => toggleHeart(item)}>
            <SvgImage
              source={require('../../svgs/heart.svg')}
              style={styles.heart}
              color={favorites.some(fav => fav.id === item.id) ? 'red' : 'white'}
              fill={favorites.some(fav => fav.id === item.id) ? 'red' : 'white'}
            />
          </Pressable>
        </View>
        <Image source={{ uri: item.url }} style={styles.image} />
        <Text style={styles.title2}>{item.title}</Text>
        <View style={styles.info}>
          <Text style={styles.kal}>{item.kal}</Text>
          <Text style={styles.date}>{item.time}</Text>
        </View>
      </Pressable>
    </View>
  );

  const filteredOnBoarding = OnBoarding.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <View style={styles.container}>
      {refreshing ? (
        <ActivityIndicator size="large" color={colors.primary[300]} style={styles.loadingIndicator} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* Header */}
          <View style={styles.title}>
            <View>
              <Text style={styles.morning}>Good morning</Text>
              <Text style={styles.name}>Alena Sabyan</Text>
            </View>
            <Basket onPress={() => navigation.navigate('Cart')} />
          </View>

          {/* Categories Section */}
          <View style={styles.categorySection}>
            <Text style={[styles.name, { fontSize: 20, fontWeight: 'bold', marginTop: 24 }]}>
              Categories
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryList}>
              {data2.map((item) => {
                const isSelected = selectedCategory === item.title;

                return (
                  <Pressable
                    key={item.id}
                    onPress={() => {
                      setSelectedCategory(item.title);
                    }}
                    style={[
                      styles.press,
                      {
                        backgroundColor: isSelected
                          ? colors.primary[300]
                          : '#F8F8F8',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.category,
                        {
                          color: isSelected ? 'black' : 'grey',
                        },
                      ]}>
                      {item.title}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Recipes Section */}
          <Text style={[styles.name, { fontSize: 20, fontWeight: 'bold', marginTop: 24 }]}>
            {selectedCategory} Recipes
          </Text>
          <FlatList
            data={filteredOnBoarding}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.recipeList}
          />

          {/* Popular Recipes Section */}
          <Text style={[styles.name, { fontSize: 20, fontWeight: 'bold', marginTop: 24 }]}>
            Popular Recipes
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.popularSection}>
            {OnBoarding.map((item) => (
              <View style={styles.card} key={item.id.toString()}>
                <Pressable
                  style={styles.cardPress}
                  onPress={() => navigation.navigate('Details', { item })}>
                  <View style={styles.heartContainer}>
                    <Pressable
                      style={styles.heartPress}
                      onPress={() => toggleHeart(item)}>
                      <SvgImage
                        source={require('../../svgs/heart.svg')}
                        style={styles.heart}
                        color={favorites.some(fav => fav.id === item.id) ? 'red' : 'white'}
                        fill={favorites.some(fav => fav.id === item.id) ? 'red' : 'white'}
                      />
                    </Pressable>
                  </View>
                  <Image source={{ uri: item.url }} style={styles.image} />
                  <Text style={styles.title2}>{item.title}</Text>
                  <View style={styles.info}>
                    <Text style={styles.kal}>{item.kal}</Text>
                    <Text style={styles.date}>{item.time}</Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  morning: {
    fontSize: 14,
    color: 'grey',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center', // Yükleniyor göstergesini ortalamak için
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 14,
    color: 'grey',
  },
  press: {
    width: 119,
    height: 41,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  categoryList: {
    paddingVertical: 12,
  },
  image: {
    width: 168,
    height: 128,
    borderRadius: 10,
  },
  card: {
    width: 200,
    height: 280,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kal: {
    fontSize: 12,
    color: 'grey',
  },
  date: {
    fontSize: 12,
    color: 'grey',
  },
  title2: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardPress: {
    gap: 10,
    paddingHorizontal: 20,
  },
  heart: {
    width: 24,
    height: 24,
    alignItems: 'center',
  },
  heartPress: {
    backgroundColor: '#0A2533',
    width: 28,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
