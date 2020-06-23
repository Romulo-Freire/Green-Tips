import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const Locals = () => {

  const [location, setLocation] = useState(null);

  const navigator = useNavigation();
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>  exitApp());

    return BackHandler.removeEventListener('hardwareBackPress', () => exitApp());
  }, []);

  function exitApp(){
    Alert.alert('foi');
  }

  useEffect(() => {
    async function initPosition(){
      const { granted } = await requestPermissionsAsync();
      if(granted){
        const { coords } = await getCurrentPositionAsync({ enableHighAccuracy: true});
        
        const { latitude, longitude } = coords;

        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }else{
        setLocation({
          latitude: 10.4578,
          longitude: 10.3698,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    initPosition();
  },[]);

  return (
    <View style={styles.conteiner}>
      <MapView
        style={styles.map}
        initialRegion={location}
        
      >
      { location && 
        <Marker 
           coordinate={{latitude: location.latitude,  longitude: location.longitude}}
           pinColor={'green'}
        />
      }
      </MapView>
      <View style={styles.formSearch}  >
        <TextInput 
          style={styles.form_input}
          placeholder={'Nome ou tipo de material'}
          autoCapitalize={'words'}
          autoCorrect={false}
          
          />
        <TouchableOpacity style={styles.button_search}>
          <Icon name={'search1'} size={22} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Locals;