import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { normalize } from '../constants/metrics';

export interface SvgImageProps extends SvgProps {
  source: any;
  tab?: boolean;
}

export const SvgImage: React.FC<SvgImageProps> = ({
  source,
  children,
  tab, 
  ...props
}) => {
  if (!source?.default) {
    return null;
  }

  if (props.width) {
    props.width = normalize('width', Number(props.width));
  }

  if (props.height) {
    props.height = normalize('width', Number(props.height));
  }

  // Border ve background için özel stiller
  const containerStyle = tab ? styles.activeTab : {};

  return (
    <View style={containerStyle}>
      {React.createElement(source.default, props, children)}
    </View>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: '#0A2533', // Arka plan rengi
    borderRadius: 30, // Kenar yuvarlama
    borderWidth: 1, // Kenar kalınlığı
   
    padding: 5, // İç boşluk
    width: 60, // Genişlik
    height: 60, // Yukseklik
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    
  },
});
