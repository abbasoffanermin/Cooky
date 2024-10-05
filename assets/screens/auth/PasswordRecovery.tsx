import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../svgs/logo.svg';
import {TextLink} from '../../components/TextLink';
import {CustomInput} from '../../components/CustomInput';
import {CustomButton} from '../../components/CustomButton';
import {colors} from '../../styles/colors';
import {useForm, Controller} from 'react-hook-form';
export const PasswordRecovery = ({navigation}) => {
  const [code, setCode] = React.useState<string>('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'anermin@gmail.com',
    },
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
    navigation.navigate('VerificationEmail', {email: data.email});
  };
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.text}>
        <Text style={styles.title}>Password Recovery</Text>
        <TextLink
          content="Enter your email to recover your password"
          highlighted={[
            {
              text: '',
              callback: () => {},
            },
          ]}
          style={styles.desc}
        />
      </View>

      <View style={styles.text}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Email is required'},
            minLength: {value: 3, message: 'Minimum length is 3'},

            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email is not valid',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Email"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.email?.message}
            />
          )}
          name="email"
        />
        <CustomButton
          title="Sign in"
          backgroundColor={colors.primary[300]}
          color={colors.NeutralLight[700]}
          onPress={handleSubmit(onSubmit)}
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
  lineContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
    justifyContent: 'space-between',
  },
});
