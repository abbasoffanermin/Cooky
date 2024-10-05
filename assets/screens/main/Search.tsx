import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SvgImage} from '../../components/SvgImage';
import {CustomInput} from '../../components/CustomInput';
import {FlashList} from '@shopify/flash-list';
import {data2} from '../../mocks/data2';
import {OnBoarding} from '../../mocks/data';

export const Search = () => {
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
        <Image source={{uri: item.url}} style={styles.image} />
        <Text style={styles.title2}>{item.title.substring(0, 12) + '...'}</Text>
      </Pressable>
    </View>
  );
  const rendercard2 = ({item, index}: {item: any; index: number}) => (
    <View style={styles.card2}>
      <Pressable style={styles.cardPress2}>
        <Image source={{uri: item.url}} style={styles.image} />
        <Text style={styles.title3}>{item.title}</Text>
        <Pressable style={styles.arrow}>
          <SvgImage
            source={require('../../svgs/arrowRight.svg')}
            color={'white'}
            style={styles.iconRight}
          />
        </Pressable>
      </Pressable>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <SvgImage
          source={require('../../svgs/arrowLeft.svg')}
          color={'#0A2533'}
          style={styles.icon}
        />
        <Text style={styles.title}>Search</Text>
        <Text></Text>
      </View>
      <CustomInput
        style={styles.inp}
        placeholder="Search"
        onChangeText={() => {}}
      />
      <FlashList
        showsHorizontalScrollIndicator={false}
        data={data2}
        horizontal
        renderItem={renderItem}
        estimatedItemSize={100}
        contentContainerStyle={{paddingVertical: 12}}
      />
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
      <Text
        style={[
          styles.name,
          {fontSize: 20, fontWeight: 'bold', marginTop: 24},
        ]}>
        Editor's Choise
      </Text>
      <FlashList
        showsHorizontalScrollIndicator={false}
        data={OnBoarding}
        renderItem={rendercard2}
        estimatedItemSize={100}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A2533',
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  inp: {
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
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
  category: {
    fontSize: 14,
    color: 'grey',
  },
  cardPress: {
    gap: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 10,
  },
  title2: {
    fontSize: 16,
  },
  card: {
    width: 100,
    height: 146,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card2: {
    width: 330,
    height: 100,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    gap: 20,
    justifyContent: 'center',
    marginVertical: 20,
  },
  cardPress2: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  title3: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 155,
  },
});
