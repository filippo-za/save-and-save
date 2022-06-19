import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import {COLORS, SIZES, SHADOWS, Assets, ResData} from '../contents/Index';
import {ButtonDetails} from '../components/Button';
import ResDetails from '../components/ResDetails';
import Button from '../components/Button';

import React from 'react';

const DetailsNavbar = ({data, navigation}) => (
  <View style={{width: '100%', height: 373}}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
    />
    <ButtonDetails imgUrl={Assets.left} press={() => navigation.goBack()} />
  </View>
);

const Details = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}>
        <View
          style={{
            padding: SIZES.base,
            marginHorizontal: 50,
          }}>
          <Button
            onPress={() =>
              alert('Cibo salvato! Vieni a ritirarlo nel nostro punto vendita.')
            }
          />
        </View>
      </View>
      <FlatList
        data={ResData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsNavbar data={data} navigation={navigation} />
            <View style={{padding: SIZES.font}}>
              <ResDetails data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
