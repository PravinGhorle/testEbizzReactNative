import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  data_request,
  data_success,
  data_failure,
} from '../redux/data/DataAction';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.data);
  let newDate;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(data_request);
    try {
      let response = await fetch(
        'https://rosterbuster.aero/wp-content/uploads/dummy-response',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let res = await response.text();
      let json = JSON.parse(res);
      console.log('respons', json);
      dispatch(data_success(json));
    } catch (e) {
      console.log('error', e);
      dispatch(data_failure());
    }
  };
  const gotoDetails = (item) => {
    navigation.navigate("Details", {item : item})
  }

  const DateStrip = ({date}) => {
    return (
      <View style={styles.dateStrip}>
        <Text style={styles.dateStripText}>{date}</Text>
      </View>
    );
  };

  const Flight = ({item}) => {
    return (
      <TouchableOpacity
        onPress = {()=> gotoDetails(item)}
        style={styles.dutyView}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="plane" size={25} />
          <Text style={styles.FLTText}>
            {item?.Departure} - {item?.Destination}
          </Text>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Text></Text>
          <Text style={{color: 'red'}}>
            {item?.Time_Arrive} - {item?.Time_Depart}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const Do = ({item}) => {
    return (
      <TouchableOpacity
        onPress = {()=> gotoDetails(item)}
        style={styles.dutyView}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="suitcase" size={25} />
          <View style={{paddingLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Layover</Text>
            <Text style={styles.dutyText}>{item?.Departure}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text></Text>
          <Text style={{color: 'red'}}>
            {item?.Time_Arrive} - {item?.Time_Depart}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SBY = ({item}) => {
    return (
      <TouchableOpacity
        onPress = {()=> gotoDetails(item)}
        style={styles.dutyView}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="paste" size={25} />
          <View style={{paddingLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Standby ({item?.Departure})
            </Text>
            <Text style={styles.dutyText}>{item?.Departure}</Text>
          </View>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Text>Match Crew</Text>
          <Text style={{color: 'red'}}>
            {item?.Time_Arrive} - {item?.Time_Depart}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  function Item(props) {
    const item = props.item?.item;
    let date = item?.Date;
    let dateFlag = false;
    if (props.item.index > 0) {

      if (newDate != date) {
        dateFlag = true;
        newDate = item?.Date;
      } else dateFlag = false;
    } else {
      newDate = item?.Date;
      dateFlag = true;
    }
    
    return (
      <View>
        {dateFlag && <DateStrip date={item?.Date} />}
        {item?.DutyID === 'FLT' && <Flight item={item} />}
        {item?.DutyID === 'DO' && <Do item={item} />}
        {item?.DutyID === 'SBY' && <SBY item={item} />}
      </View>
    );
  }
  function Separator() {
    return <View style={{borderStyle: 'solid', borderWidth: 1}} />;
  }
  return (
    <View>
      <FlatList
        style={{marginTop: 20}}
        data={data}
        keyExtractor={(item, key) => 'index ' + key}
        renderItem={(item) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dateStrip: {
    justifyContent: 'center',
    height: 30,
    backgroundColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#555',
  },
  dateStripText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 10,
  },
  dutyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    padding: 10,
    marginLeft: 20,
  },
  FLTText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20,
  },
  dutyText: {
    color: 'gray',
    fontSize: 15,
  },
});
