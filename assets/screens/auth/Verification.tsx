import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OtpCodeField} from '../../components/OtpCodeField';
import Logo from '../../svgs/logo.svg';
import {TextLink} from '../../components/TextLink';
import {CustomButton} from '../../components/CustomButton';
import {colors} from '../../styles/colors';
export const Verification = ({navigation, route}) => {
  const [code, setCode] = React.useState<string>('');
  const {phoneNumber} = route.params;

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.text}>
        <Text style={styles.title}>Verify phone number</Text>
        <TextLink
          content={`Enter the 4-digit code sent to ${phoneNumber}`}
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
      <View>
        <OtpCodeField
          length={4}
          code={code}
          setCode={setCode}
          style={styles.otp}
          triggerOnFinish={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
      <CustomButton
        title="Next"
        backgroundColor={colors.primary[300]}
        color={colors.NeutralLight[700]}
        onPress={() => navigation.navigate('Register')}
        customStyle={styles.button}
      />
       <CustomButton
        title="Send again"
        backgroundColor={colors.NeutralLight[500]}
        color='#172B4D'
        customStyle={styles.buttonSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otp: {
    paddingHorizontal: 35,
    marginVertical: 24,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: '30%',
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
  text: {
    alignItems: 'center',
    marginTop: '10%',
    gap: 10,
  },
  button: {
    
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonSend: {
    alignSelf: 'center',
    marginTop: 20
  }
});
