import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgImage } from '../../components/SvgImage'

export const Account = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.nav}>
        <Text></Text>
        <Text style={styles.title}>Account</Text>
        <SvgImage source={require('../../svgs/setting.svg')} color={'#0A2533'} style={styles.icon} />
      </View>
      <View style={styles.header}>
        <SvgImage source={require('../../svgs/profil.svg')} color={'#0A2533'} style={styles.icon} />
        <View >
          <Text style={styles.name}>Alena Sabyan</Text>
          <Text style={styles.desc}>alena.sabyan@.com</Text>
        </View>
        <Pressable style={styles.arrow}>
          <SvgImage source={require('../../svgs/arrowRight.svg')} color={'white'} style={styles.iconRight} />
        </Pressable>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
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
    width:24,
    height: 24,
},
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    width:327,
    height: 80,
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 26,
  },
  
})