import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';
import {SvgImage} from './SvgImage';
import {CommonStyles} from '../mocks/common.styles';
interface ICustomInput {
  placeholder: string;
  value?: string;
  onChangeText: any;
  secureTextEntry?: boolean;
  style?: any;
  placeholderTextColor?: string;
  keyboardType?: string;
  maxLength?: number;
  numberOfLines?: number;
  icon?: any;
  iconPosition?: 'left' | 'right';
  error?: string;
  disabled?: boolean;
  multiline?: boolean;
  label?: string;
}

export const CustomInput: React.FC<ICustomInput> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
  placeholderTextColor,
  keyboardType,
  maxLength,
  numberOfLines,
  icon,
  iconPosition,
  error,
  disabled,
  multiline,
  label,
}) => {
  return (
    <View style={style} >
      <View
        style={[
          styles.container,
          iconPosition === 'left' ? CommonStyles.rowReverse : CommonStyles.row,
        ]}>
        {icon ? (
          <SvgImage color={colors.NeutralLight[200]} source={icon} />
        ) : null}
        <TextInput
          style={[ styles.inp]}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {error && (
        <Text
          style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 305,
    height: 44,
    alignContent: 'center',
    backgroundColor: colors.NeutralLight[500],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.NeutralLight[400],
  },
  inp: {
    paddingHorizontal: 20,
    width: '100%',
  },
 error: {
    color: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginTop: 10,
  }
  
});
