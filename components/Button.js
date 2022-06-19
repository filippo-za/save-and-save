import {TouchableOpacity, Text, Image} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../contents/Index';
import React from 'react';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.font,
      }}
      onPress={onPress}>
      <Text style={{color: COLORS.white}}>Salva cibo</Text>
    </TouchableOpacity>
  );
};

export const ButtonDetails = ({imgUrl, press}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        marginLeft: 20,
        marginTop: 20,
      }}
      onPress={press}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

export default Button;
