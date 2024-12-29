import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MMKV } from 'react-native-mmkv';

export const Cart = () => {

    const storage = new MMKV();
    console.log(storage.getAllKeys());
    
  return (
    <View>
      <Text>Cart</Text>

    </View>
  )
}



const styles = StyleSheet.create({})