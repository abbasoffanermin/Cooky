import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable, Image, RefreshControl } from 'react-native';
import { SvgImage } from '../../components/SvgImage';
import { MMKV } from 'react-native-mmkv';

// MMKV Storage başlatılması
const storage = new MMKV();

export const Account = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]); // useState ile favorites'i tutuyoruz
  const [refreshing, setRefreshing] = useState(false);

  // MMKV'den favorileri okuyup state'e yüklüyoruz
  useEffect(() => {
    const storedFavorites = storage.getString('favorites') ? JSON.parse(storage.getString('favorites')) : [];
    setFavorites(storedFavorites);
  }, []);  // Yalnızca sayfa ilk açıldığında çalışır

  // onRefresh handler
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false); // Refresh tamamlandığında refreshing state'ini false yapıyoruz
    }, 2000);
  };

  // Favorilere öğe ekleme
  const addToFavorites = (item) => {
    const updatedFavorites = [...favorites, item];
    setFavorites(updatedFavorites);
    storage.set('favorites', JSON.stringify(updatedFavorites)); // Favorileri MMKV'ye kaydediyoruz
  };

  // Favorilerden öğe silme
  const removeFromFavorites = (item) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    setFavorites(updatedFavorites);
    storage.set('favorites', JSON.stringify(updatedFavorites)); // Favorileri MMKV'ye kaydediyoruz
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style={styles.container}
    >
      {/* Navigation Header */}
      <View style={styles.nav}>
        <Text></Text>
        <Text style={styles.title}>Account</Text>
        <SvgImage source={require('../../svgs/setting.svg')} color={'#0A2533'} style={styles.icon} />
      </View>

      {/* Profile Header */}
      <View style={styles.header}>
        <SvgImage source={require('../../svgs/profil.svg')} color={'#0A2533'} style={styles.icon} />
        <View>
          <Text style={styles.name}>Alena Sabyan</Text>
          <Text style={styles.desc}>alena.sabyan@.com</Text>
        </View>
        <Pressable style={styles.arrow}>
          <SvgImage source={require('../../svgs/arrowRight.svg')} color={'white'} style={styles.iconRight} />
        </Pressable>
      </View>

      <View style={styles.container2}>
        {/* Yatay ScrollView ile satırları düzenle */}
        <ScrollView nestedScrollEnabled>
          <View style={styles.row}>
            {favorites.map((item, index) => {
              // İki öğe için her seferinde bir satırda yer açmak
              if (index % 2 === 0) {
                return (
                  <View style={styles.rowItem} key={item.id.toString()}>
                    <View style={styles.cardContainer}>
                      <Pressable
                        style={styles.cardPress}
                        onPress={() => navigation.navigate('Details', { item })}>
                        <View style={styles.heartContainer}>
                          <Pressable
                            style={styles.heartPress}
                            onPress={() => removeFromFavorites(item)}>
                            <SvgImage
                              source={require('../../svgs/heart.svg')}
                              style={styles.heart}
                              color={'red'}
                              fill={'red'}
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
                    {/* Eğer sonraki item varsa 2. öğeyi de ekle */}
                    {favorites[index + 1] && (
                      <View style={styles.cardContainer}>
                        <Pressable
                          style={styles.cardPress}
                          onPress={() => navigation.navigate('Details', { item: favorites[index + 1] })}>
                          <View style={styles.heartContainer}>
                            <Pressable
                              style={styles.heartPress}
                              onPress={() => removeFromFavorites(favorites[index + 1])}>
                              <SvgImage
                                source={require('../../svgs/heart.svg')}
                                style={styles.heart}
                                color={'red'}
                                fill={'red'}
                              />
                            </Pressable>
                          </View>
                          <Image source={{ uri: favorites[index + 1].url }} style={styles.image} />
                          <Text style={styles.title2}>{favorites[index + 1].title}</Text>
                          <View style={styles.info}>
                            <Text style={styles.kal}>{favorites[index + 1].kal}</Text>
                            <Text style={styles.date}>{favorites[index + 1].time}</Text>
                          </View>
                        </Pressable>
                      </View>
                    )}
                  </View>
                );
              }
              return null; // Eşleşmeyen öğe için null döndür
            })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Navigation Styles
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A2533',
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  cardPress: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    justifyContent: 'center',
    gap: 10,
    padding: 10,
  },

  // Profile Styles
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A2533',
  },
  desc: {
    fontSize: 14,
    color: 'grey',
  },
  arrow: {
    backgroundColor: '#0A2533',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 24,
    height: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    width: 327,
    height: 80,
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 26,
  },

  // Favorites List Styles
  favoriteList: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },

  // Empty State Styles
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    color: 'grey',
    fontStyle: 'italic',
  },

  // Card Styles
  card: {
    width: 160, // İki element üçün uyğun genişlik
    height: 280,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 168,
    height: 128,
    borderRadius: 10,
  },
  title2: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 180,
    gap: 10,
    height: 300,
  },
});

