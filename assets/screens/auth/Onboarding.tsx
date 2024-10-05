import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { OnBoarding } from '../../mocks/data';
import { colors } from '../../styles/colors';
import { CustomButton } from '../../components/CustomButton';
import { Pagination } from '../../components/Pagination';

export const Onboarding = ({navigation}) => {
  const listRef = React.useRef<FlashList>(null);

  const onPress = (index: number) => {
    if (index < OnBoarding.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      navigation.navigate('Login');
      
    }
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.background}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.texts}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      <Pagination selectedIndex={index} />
      <CustomButton
        title="Get Started"
        width={305}
        height={44}
        backgroundColor={colors.primary[300]}
        color={colors.NeutralLight[700]}
        customStyle={{ fontSize: 14, fontWeight: 'medium', textAlign: 'center' }}
        onPress={() => onPress(index)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlashList
        ref={listRef}
        data={OnBoarding}
        horizontal
        renderItem={renderItem}
        estimatedItemSize={100}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  background: {
    width: Dimensions.get('window').width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 57,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 14,
  },
  texts: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
  },
});
