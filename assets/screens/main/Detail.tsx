import { Image, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { MMKV } from 'react-native-mmkv'; // MMKV importu
import { SvgImage } from '../../components/SvgImage';
import { colors } from '../../styles/colors';

// MMKV instance yaratmaq
const storage = new MMKV();

export const Detail = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
 
  // Add to Cart funksiyası
  const addToCart = () => {
    try {
      // MMKV-də mövcud olan cart-u oxuyuruq və parse edirik
      let cart = storage.getString('cart');
      if (cart) {
        // Əgər cart varsa, JSON formatında olan məlumatı array-ə çeviririk
        cart = JSON.parse(cart);
      } else {
        // Əgər cart yoxdursa, boş array yaradılır
        cart = [];
      }

      // Yeni item-i cart-a əlavə edirik
      cart.push(item);

      // Cart-u yenidən MMKV-də saxlayırıq (JSON formatında)
      storage.set('cart', JSON.stringify(cart));

      alert('Item cart-a əlavə edildi!');
    } catch (error) {
      console.error('Item-i cart-a əlavə etmək mümkün olmadı:', error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <View>
        <SvgImage
          source={require('../../svgs/cancel.svg')}
          color={'black'}
          width={24}
          height={24}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.time}>
          <SvgImage source={require('../../svgs/time.svg')} />
          <Text> {item.time}</Text>
        </View>
      </View>
      <Text style={styles.desc}>{item.desc}</Text>

      <View style={styles.info}>
        <View>
          <View style={styles.time}>
            <View style={styles.icon}>
              <SvgImage source={require('../../svgs/kal.svg')} />
            </View>
            <Text>{item.kal}</Text>
          </View>
          <View style={[styles.time, { marginTop: 16 }]}>
            <View style={styles.icon}>
              <SvgImage source={require('../../svgs/fat.svg')} />
            </View>
            <Text>{item.fat + ' fats'}</Text>
          </View>
        </View>

        <View>
          <View style={styles.time}>
            <View style={styles.icon}>
              <SvgImage source={require('../../svgs/carb.svg')} />
            </View>
            <Text>{item.carb + ' carbs'}</Text>
          </View>
          <View style={[styles.time, { marginTop: 16 }]}>
            <View style={styles.icon}>
              <SvgImage source={require('../../svgs/protein.svg')} />
            </View>
            <Text>{item.protein + ' protein'}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.creator}> Creator</Text>
        <View style={styles.creatorText}>
          <Image source={{ uri: item.image }} style={styles.creatorImage} />
          <View>
            <Text style={styles.creatorName}>{item.creator}</Text>
            <Text style={styles.creatorDesc}>{item.creatordesc}</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}> Add to Cart</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  desc: {
    fontSize: 14,
    alignItems: 'center',
    color: 'grey',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    gap: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  text: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#E6EBF2',
  },
  info: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  creator: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  creatorImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  creatorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creatorText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginTop: 10,
  },
  creatorDesc: {
    fontSize: 14,
    color: 'grey',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary[500],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
