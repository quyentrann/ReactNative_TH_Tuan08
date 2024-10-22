import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function App({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          A premium online store{'\n'} for sporter and their stylish choice
        </Text>
      </View>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            height: 400,
            width: 360,
            backgroundColor: 'pink',
            justifyContent: 'center',
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <Image source={require('../image/bifour_-removebg-preview.png')} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
          POWER BIKE {'\n'}
          SHOP
        </Text>
      </View>
      <View
        style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 320,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'red', borderRadius: 15
          }} onPress={()=> navigation.navigate("screen2")}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
