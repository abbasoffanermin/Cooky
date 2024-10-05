import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SvgImage } from './SvgImage';

interface ICustomButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  customStyle?: any;
  icon?: any;
  iconPosition?: 'left' | 'right';
}

export const CustomButton: React.FC<ICustomButton> = ({
  title,
  onPress,
  disabled = false,
  width = 300,
  height = 50,
  backgroundColor,
  color,
  customStyle,
  icon,
  iconPosition,
}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <View
        style={[
          { backgroundColor: backgroundColor, width: width, height: height, opacity: disabled ? 0.5 : 1, ...customStyle }, // Opacity əlavə edin
          styles.container,
        ]}>
        {icon && (
          <SvgImage 
            source={icon} 
            style={{ marginRight: iconPosition === 'right' ? 10 : 0 }} 
          />
        )}
        <Text style={[{ color: color }]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    gap: 30,
  },
});
