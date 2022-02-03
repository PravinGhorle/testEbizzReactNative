import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import baseUrl from '../appConstants';

export default function Home({navigation}) {
  const getData = async () => {
    try {
      let response = await fetch(baseUrl + 'breeds/image/random', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let res = await response.text();
      let json = JSON.parse(res);
      console.log('respons', json);
      if (json.status == 'success')
        navigation.navigate('Details', {item: json.message});
    } catch (e) {
      console.log('error', e);
      alert("something went wrong, try again after sometime")
    }
  };

  return (
    <View style={styles.pageView}>
      <TouchableOpacity style={styles.button} onPress={() => getData()}>
        <Text>Fetch</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    alignSelf: 'center',
    width: '80%',
  },
});
