import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';

import {COLORS, SIZES, Assets} from '../contents/Index';

const HomeNavbar = ({onSearch}) => {
  return (
    <View style={{backgroundColor: COLORS.primary, padding: SIZES.font}}>
      <View>
        <Text
          style={{
            color: COLORS.white,
            fontWeight: '700',
            fontSize: SIZES.large,
          }}>
          SaveAndSave
        </Text>
      </View>
      <View style={{paddingVertical: SIZES.font, marginTop: SIZES.large}}>
        <Text style={{fontSize: SIZES.font, color: 'white'}}>Ciao 👋</Text>
        <Text
          style={{
            fontSize: SIZES.font,
            color: 'white',
            marginTop: SIZES.base / 2,
          }}>
          Non aspettare che il cibo venga sprecato.
        </Text>
      </View>
      <View style={{marginTop: SIZES.extraLarge}}>
        <View
          style={{
            backgroundColor: COLORS.gray,
            borderRadius: SIZES.font,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
          }}>
          <Image
            source={Assets.search}
            resizeMode="contain"
            style={{width: 20, marginRight: SIZES.base}}
          />
          <TextInput placeholder="Cerca Locali" onChangeText={onSearch} />
        </View>
      </View>
    </View>
  );
};

export default HomeNavbar;
