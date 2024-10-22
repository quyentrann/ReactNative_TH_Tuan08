import {useState} from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App({route, navigation}) {
  const bike = route.params.item;
  console.log(bike)
  const [heart, setHeart] = useState(false)
  function clickHeart(){
    if(heart){
      setHeart(!heart)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            height: 400,
            width: 360,
            backgroundColor: 'pink',
            justifyContent: 'center',
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <Image source={bike.image} />
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Pina Mountain</Text>
        <View style={{ flexDirection: 'row', flex: 0.2 }}>
          <Text style={{ fontSize: 22 }}>15% OFF I 350$</Text>
          <Text
            style={{
              paddingLeft: 70,
              fontSize: 20,
              textDecorationLine: 'line-through',
            }}>
            449$
          </Text>
        </View>
        <View style={{ flex: 0.8, justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Description</Text>
          <Text style={{ fontSize: 20, color: 'gray', fontWeight: '500' }}>
            It is a very important form of writing as we write almost everything
            in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 0.5, justifyContent: 'space-around', alignItems: 'center', flexDirection:'row' , }}>
        <TouchableOpacity onPress={()=> clickHeart()}>
        <FontAwesome5 name="heart" size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 15,
          }} onPress={()=> navigation.navigate("screen2")}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
