import {View, Text} from 'react-native';
import {COLORS, SIZES} from '../contents/Index';
import {Name, Avaiable, Price, Photo} from './ResInfo';
import {Button} from './Index';
import React from 'react';

const ResDetails = ({data}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Name
          titleSize={SIZES.extraLarge}
          title={data.name}
          address={data.address}
        />
        <Price price={data.price} />
      </View>
      <View style={{marginTop: SIZES.extraLarge}}>
        <Avaiable description={data.description} avaiable={data.avaiability} />
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Photo photo={data.imgDetails} />
      </View>
    </>
  );
};

export default ResDetails;
