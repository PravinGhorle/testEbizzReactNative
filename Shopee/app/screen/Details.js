import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function Details({navigation, route}) {
  const {item} = route.params;

  return (
    <ScrollView style={styles.pageView}>
     
      <Text style={styles.data}>Captain: {item?.Captain}</Text>
      <Text style={styles.data}>Date: {item?.Date}</Text>
      <Text style={styles.data}>Departure: {item?.Departure}</Text>
      <Text style={styles.data}>Destination: {item?.Destination}</Text>
      <Text style={styles.data}>DutyCode: {item?.DutyCode}</Text>
      <Text style={styles.data}>DutyID: {item?.DutyID}</Text>
      <Text style={styles.data}>Flightnr: {item?.Flightnr}</Text>
      <Text style={styles.data}>Tail: {item?.Tail}</Text>
      <Text style={styles.data}>Time_Arrive: {item?.Time_Arrive}</Text>
      <Text style={styles.data}>Time_Depart: {item?.Time_Depart}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 10
  },
  data: {
    fontWeight: 'bold',
    fontSize: 15
  }
});
