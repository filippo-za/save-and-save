import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';

import {ResData, COLORS} from '../contents/Index';
import {HomeNavbar, ResCard} from '../components/Index';

const Home = () => {
  const [resData, setResData] = useState(ResData);

  const search = value => {
    if (!value.length) setResData(ResData);

    const filter = ResData.filter(item =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );

    if (filter.length) {
      setResData(filter);
    } else {
      setResData(ResData);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={resData}
            renderItem={({item}) => <ResCard data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeNavbar onSearch={search} />}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
          <View style={{height: 400, backgroundColor: COLORS.primary}}></View>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
