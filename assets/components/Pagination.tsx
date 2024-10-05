import { OnBoarding } from '../mocks/data';
import React, { useEffect } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { normalize } from '../constants/metrics';
import { colors } from '../styles/colors';

interface IDot {
  index: number;
  animatedIndex: SharedValue<number>;
}

interface IPagination {
  selectedIndex: number;
  style?: StyleProp<ViewStyle>;
}

const Dot: React.FC<IDot> = ({ index, animatedIndex }) => {
  const animatedDot = useAnimatedStyle(() => {
    const isActive = Math.floor(animatedIndex.value) === index; // Yalnız tam ədəd yoxlanılır

    return {
      width: isActive ? 32 : dotSize, // Aktiv nöqtə genişlənir
      backgroundColor: interpolateColor(
        animatedIndex.value,
        [index - 1, index, index + 1],
        [colors.NeutralLight[400], colors.primary[400], colors.NeutralLight[400]],
      ),
    };
  });

  return <Animated.View style={[styles.dot, animatedDot]} />;
};

export const Pagination: React.FC<IPagination> = ({ selectedIndex, style }) => {
  const animatedIndex = useSharedValue(selectedIndex);

  useEffect(() => {
    animatedIndex.value = withTiming(selectedIndex, { duration: 200 });
  }, [animatedIndex, selectedIndex]);

  const renderDots = (_: unknown, index: number) => (
    <Dot key={index} index={index} animatedIndex={animatedIndex} />
  );

  return (
    <View style={[style]}>
      <View style={styles.dots}>{OnBoarding.map(renderDots)}</View>
    </View>
  );
};

const dotSize = normalize('width', 8);

const styles = StyleSheet.create({
  dots: {
    gap: normalize('horizontal', 8),
    flexDirection: 'row',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: 28,
  } as ViewStyle,
  controller: {
    paddingHorizontal: normalize('horizontal', 20),
    paddingVertical: normalize('vertical', 12),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 48,
  } as ViewStyle,
  hide: {
    opacity: 0,
  } as ViewStyle,
});
