import {View, Text, Image} from 'react-native';
import React from 'react';
import {SIZES, FONTS, SHADOWS, COLORS, Assets} from '../contents/Index';

export const Name = ({title, address, titleSize}) => {
  return (
    <View>
      <Text
        style={{color: COLORS.primary, fontWeight: '500', fontSize: titleSize}}>
        {title}
      </Text>
      <Text style={{color: COLORS.secondary, fontWeight: '500'}}>
        {address}
      </Text>
    </View>
  );
};

export const Price = ({price}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: SIZES.large,
          color: COLORS.primary,
          fontWeight: '500',
        }}>
        {price} €
      </Text>
    </View>
  );
};

export const Avaiable = ({description, avaiable}) => {
  return (
    <View>
      <Text style={{color: COLORS.gray, fontWeight: '400'}}>{description}</Text>
      <Text
        style={{
          color: COLORS.gray,
          fontWeight: '400',
          marginTop: SIZES.extraLarge,
        }}>
        {avaiable} 😋
      </Text>
    </View>
  );
};

export const Photo = ({photo}) => {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        marginVertical: 60,
      }}>
      <Image
        source={photo}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      />
    </View>
  );
};
