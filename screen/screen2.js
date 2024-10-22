import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

export default function App({ navigation }) {
  const arr = [
    {
      id: 1,
      image: require('../image/bifour_-removebg-preview.png'),
      name: 'bike',
    },
    {
      id: 2,
      image: require('../image/bione-removebg-preview.png'),
      name: 'bike',
    },
    {
      id: 3,
      image: require('../image/bithree_removebg-preview.png'),
      name: 'mountain',
    },
    {
      id: 4,
      image: require('../image/bitwo-removebg-preview.png'),
      name: 'polopada',
    },
    {
      id: 5,
      image: require('../image/bithree_removebg-preview.png'),
      name: 'bike',
    },

    {
      id: 6,
      image: require('../image/bione-removebg-preview.png'),
      name: 'bike',
    },
  ];

  const [bike, setBike] = useState(arr);
  function filterBike(name) {
    if (name === 'All') {
      setBike(arr);
    } else {
      setBike(arr.filter(value=> value.name ===name));}
  }

  function itemClick(item){
    
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.2, padding: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>
          The world’s Best Bike
        </Text>
      </View>
      <View
        style={{
          flex: 0.4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 90,
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => filterBike('All')}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 90,
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => filterBike('bike')}>
          <Text>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 90,
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => filterBike('mountain')}>
          <Text>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3.5 }}>
        <FlatList
          data={bike}
          numColumns={2}
          keyExtractor={(item)=> item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('screen3', {item})}>
                <View
                  style={{
                    height: 230,
                    width: 200,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    style={{ height: 160, width: 170 }}
                  />
                  <Text>{item.name}</Text>
                  <Text>$1800</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
