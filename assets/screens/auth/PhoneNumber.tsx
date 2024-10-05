import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../svgs/logo.svg';
import {TextLink} from '../../components/TextLink';
import {CustomButton} from '../../components/CustomButton';
import {colors} from '../../styles/colors';
import {useForm, Controller} from 'react-hook-form';
import PhoneInput from 'react-native-phone-input';

export const PhoneNumber = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      phoneNumber: '1234567890',
    },
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
    navigation.navigate('Verification', {phoneNumber: data.phoneNumber});
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.text}>
        <Text style={styles.title}>Get started with Cook</Text>
        <TextLink
          content="Enter your phone number"
          highlighted={[
            {
              text: '',
              callback: () => {
                navigation.navigate('Register');
              },
            },
          ]}
          style={styles.desc}
        />
      </View>
      <View style={styles.text}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Phone number is required'},
            minLength: {value: 10, message: 'Minimum length is 10'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <PhoneInput
              style={styles.phoneInput}
              value={value}
              onChangePhoneNumber={onChange}
              onBlur={onBlur}
              placeholder="202 555 0132"
              error={errors.phoneNumber?.message}
              disabled={false}
            />
          )}
          name="phoneNumber"
        />

        <CustomButton
          title="Next"
          backgroundColor={colors.primary[300]}
          color={colors.NeutralLight[700]}
          onPress={handleSubmit(onSubmit)}
          disabled={!!Object.keys(errors).length}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: '30%',
  },
  text: {
    alignItems: 'center',
    marginTop: '10%',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: 'grey',
    width: 200,
    textAlign: 'center',
  },
  phoneInput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 50,
  },
});
