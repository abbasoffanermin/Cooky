import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MMKV } from 'react-native-mmkv';
import { SvgImage } from '../../components/SvgImage';

export const Cart = ({ navigation, route }) => {
  const storage = new MMKV();

  const favorites = storage.getString('favorites') ? JSON.parse(storage.getString('favorites')) : [];

  return (
    <ScrollView>
    
      <View style={styles.container}>
        {/* Yatay ScrollView ile satırları düzenle */}
        <ScrollView horizontal nestedScrollEnabled>
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
                            onPress={() => toggleHeart(item)}>
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
                              onPress={() => toggleHeart(favorites[index + 1])}>
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
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  rowItem: {
    width: '47%', // Her satırda 2 öğe olacak
    padding: 5,
    marginBottom: 10,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
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
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title2: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 168,
    height: 128,
    borderRadius: 10,
  },
  kal: {
    fontSize: 12,
    color: 'grey',
  },
  date: {
    fontSize: 12,
    color: 'grey',
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
});
