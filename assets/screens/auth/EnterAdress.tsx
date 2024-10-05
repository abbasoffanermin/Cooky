import { StyleSheet, Text, View, TextInput, Button, PermissionsAndroid, Platform } from 'react-native';
import React, { useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import Find from '../../svgs/find.svg';

export const EnterAdress = () => {
  const [address, setAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleFindLocation = () => {
    console.log(`Kullanıcının adresi: ${address}`);
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const granted = await Geolocation.requestAuthorization('whenInUse');
      return granted === 'granted' || granted === 'whenInUse';
    }

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Konum İzni',
          message: 'Uygulamanın konumunuza erişmesi gerekiyor.',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return false;
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          console.log(`Mevcut konum: ${latitude}, ${longitude}`);
        },
        (error) => {
          console.log(error);
          alert('Konum alınırken bir hata oluştu.');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      alert('Konum izni verilmedi.');
    }
  };

  return (
    <View style={styles.container}>
      <Find style={styles.img} />
      <TextInput
        style={styles.input}
        placeholder="Adresinizi girin..."
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Konumu Bul" onPress={handleFindLocation} />
      <Button title="Mevcut Konumu Al" onPress={getCurrentLocation} />
      {currentLocation && (
        <Text style={styles.locationText}>
          Mevcut Konum: {currentLocation.latitude}, {currentLocation.longitude}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  locationText: {
    marginTop: 20,
    fontSize: 16,
  },
});
