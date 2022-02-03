import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Details({navigation, route}) {
  const {item} = route.params;

  return (
    <View style={styles.pageView}>
      <Image source={{uri: item}} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 10,
  },
  image: {
    height: '80%',
    width: '100%',
  },
});
