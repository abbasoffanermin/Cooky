import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../svgs/logo.svg';
import {TextLink} from '../../components/TextLink';
import {CustomInput} from '../../components/CustomInput';
import {CustomButton} from '../../components/CustomButton';
import {colors} from '../../styles/colors';
import {useForm, Controller} from 'react-hook-form';
import {OtpCodeField} from '../../components/OtpCodeField';
export const VerificationEmail = ({navigation, route}) => {
    const [code, setCode] = React.useState<string>('');
    const {email} = route.params;
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.text}>
        <Text style={styles.title}>Verify your identity</Text>
        <TextLink
          content={`Enter the 4-digit code sent to ${email}`}
          highlighted={[
            {
              text: '',
              callback: () => {},
            },
          ]}
          style={styles.desc}
        />
      </View>
      <OtpCodeField
          length={4}
          code={code}
          setCode={setCode}
          style={styles.otp}
          triggerOnFinish={() => {
            navigation.navigate('Register');
          }}
        />
      <View style={styles.text}>
        <CustomButton
          title="Next"
          backgroundColor={colors.primary[300]}
          color={colors.NeutralLight[700]}
          
        />
          <CustomButton
        title="Send again"
        backgroundColor={colors.NeutralLight[500]}
        color='#172B4D'
        customStyle={styles.buttonSend}
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
  otp: {
    paddingHorizontal: 35,
    marginVertical: 24,
  },
  buttonSend: {
    alignSelf: 'center',
  }
});
