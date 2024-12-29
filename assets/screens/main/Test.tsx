import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {SvgImage} from '../../components/SvgImage';
import {CustomInput} from '../../components/CustomInput';
import {FlatList} from 'react-native';
import {data2} from '../../mocks/data2';
import {OnBoarding} from '../../mocks/data';

const Test = () => {
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
  return (
    <View style={{flex: 1,backgroundColor: 'white'}}>
          <View style ={styles.nav}>
                <SvgImage source={require('../../svgs/arrowLeft.svg')} color={'#0A2533'} style={styles.icon} />
                <Text style={styles.title}>Search</Text>
                <Text></Text>
          </View>
          <CustomInput style={styles.input} placeholder='Search' />
          < FlatList
          data={data2}
            renderItem={renderItem}
            horizontal
          />
          <View>
            <Text>Popular Recipes</Text>
            <FlatList
              data={OnBoarding}
              renderItem={rendercard}
              keyExtractor={item => item.id}
              horizontal
            />
          </View>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A2533',
    },
    icon: {
        width: 24,
        height: 24,
    },
    input: {
        width: '100%',
        paddingHorizontal: 70,
    },
    press: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0A2533',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        width: 200,
        paddingVertical: 10,
        borderRadius: 20,
         marginVertical: 10,
        borderColor: '#0A2533',
        marginHorizontal: 10
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
})