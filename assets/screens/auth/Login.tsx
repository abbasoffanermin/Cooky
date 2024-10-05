import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../svgs/logo.svg';
import Line from '../../svgs/line.svg';
import {TextLink} from '../../components/TextLink';
import {CustomInput} from '../../components/CustomInput';
import {CustomButton} from '../../components/CustomButton';
import {colors} from '../../styles/colors';
import {useForm, Controller} from 'react-hook-form';

export const Login = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: 'anermin2004@gmail.com',
      password: 'Nermin1234',
    },
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
   
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.text}>
        <Text style={styles.title}>Welcome Back</Text>
        <TextLink
          content="Hello Jos, sign in to continue! or Create new account"
          highlighted={[
            {
              text: 'Create new account',
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
            required: {value: true, message: 'Email is required'},
            minLength: {value: 3, message: 'Minimum length is 3'},

            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email is not valid',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Username or Email"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.firstName?.message}
            />
          )}
          name="firstName"
        />

        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Password is required'},
            minLength: {value: 8, message: 'Minimum length is 8'},
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: 'Password is not valid',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.password?.message}
            />
          )}
          name="password"
        />

        <CustomButton
          title="Sign in"
          backgroundColor={colors.primary[300]}
          color={colors.NeutralLight[700]}
          onPress={handleSubmit(onSubmit)}
          disabled={!!Object.keys(errors).length} // Button'u deaktiv edin
        />
        <TextLink
          content="Forgot password?"
          highlighted={[
            {
              text: 'Forgot password?',
              callback: () => {
                navigation.navigate('PasswordRecovery');
              },
            },
          ]}
          style={styles.desc}
        />
        <View style={styles.lineContainer}>
          <Line style={{alignSelf: 'center'}} />
          <Text style={{alignSelf: 'center', color: 'grey', fontSize: 14}}>
            OR
          </Text>
          <Line style={{alignSelf: 'center'}} />
        </View>
        <CustomButton
          title="Connect with Facebook"
          color="#172B4D"
          backgroundColor={colors.NeutralLight[500]}
          icon={require('../../svgs/facebook.svg')}
          iconPosition="left"
        />
        <CustomButton
          title="Connect with Google"
          color="#172B4D"
          backgroundColor={colors.NeutralLight[500]}
          icon={require('../../svgs/google.svg')}
          iconPosition="left"
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
