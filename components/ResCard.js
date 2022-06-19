import {View, Text, Image} from 'react-native';
import React from 'react';

import {COLORS, SIZES, SHADOWS} from '../contents/Index';

import {Name, Price} from './ResInfo';
import Button from './Button';

import {useNavigation} from '@react-navigation/native';

const ResCard = ({data}) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <View style={{height: 200}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <View style={{width: '100%', padding: 20}}>
        <Name
          titleSize={SIZES.large}
          title={data.name}
          address={data.address}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: SIZES.font,
          }}>
          <Price price={data.price} />
          <Button onPress={() => navigate.navigate('Details', {data})} />
        </View>
      </View>
    </View>
  );
};

export default ResCard;
