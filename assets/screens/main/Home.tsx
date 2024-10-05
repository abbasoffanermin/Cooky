import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Basket from '../../svgs/basket.svg';
import {FlashList} from '@shopify/flash-list';
import {data2} from '../../mocks/data2';
import {OnBoarding} from '../../mocks/data';
import {SvgImage} from '../../components/SvgImage';

export const Home = ({navigation}) => {
  const [press, setPress] = React.useState(false);
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <View>
      <Pressable style={styles.press}>
        <Text style={styles.category}>{item.title}</Text>
      </Pressable>
    </View>
  );

  const rendercard = ({item, index}: {item: any; index: number}) => (
    <View style={styles.card}>
      <Pressable style={styles.cardPress}>
        <View style={styles.heartContainer}>
          <Pressable style={styles.heartPress} onPress={() => setPress(!press)}>
            <SvgImage
              source={require('../../svgs/heart.svg')}
              style={styles.heart}
              color={'white'}
              fill={press ? 'red' : 'white'}
            />
          </Pressable>
        </View>
        <Image source={{uri: item.url}} style={styles.image} />

        <Text style={styles.title2}>{item.title}</Text>
        <View style={styles.info}>
          <Text style={styles.kal}>{item.kal}</Text>
          <Text style={styles.date}>{item.time}</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <View>
          <Text style={styles.morning}>Good morning</Text>
          <Text style={styles.name}>Alena Sabyan</Text>
        </View>
        <Basket />
      </View>
      <View>
        <Text
          style={[
            styles.name,
            {fontSize: 20, fontWeight: 'bold', marginTop: 24},
          ]}>
          Categories
        </Text>
        <FlashList
          showsHorizontalScrollIndicator={false}
          data={data2}
          horizontal
          renderItem={renderItem}
          estimatedItemSize={100}
          contentContainerStyle={{paddingVertical: 12}} // Use contentContainerStyle here
        />
      </View>
      <View>
        <Text
          style={[
            styles.name,
            {fontSize: 20, fontWeight: 'bold', marginTop: 24},
          ]}>
          Popular Recipes
        </Text>
        <FlashList
          showsHorizontalScrollIndicator={false}
          data={OnBoarding}
          horizontal
          renderItem={rendercard}
          estimatedItemSize={100}
        />
      </View>
    </ScrollView>
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
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
});
