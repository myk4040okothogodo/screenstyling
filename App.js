import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
    <View style={{height:'100%', width:'100%', elevation:1, flexDirection:'column', alignItems:'stretch',justifyContent: 'center',position:'absolute'}}>
      <View style={styles.view2}><Text>Them</Text></View>
      <View style={styles.view1}><Text>Those</Text></View>
    </View>  
    <View style={{ height:'100%', width:'100%', flexDirection:'row' , alignItems:'stretch',justifyContent: 'center' }}>
    <View style={styles.view1}><Text>This</Text></View>
    <View style={styles.view2}><Text>That</Text></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    top:5,
  },
  view1 : {
    flex: 1.8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 120,
  },
  view2 : {
     flex: 1,
     backgroundColor: 'green',
     alignItems: 'center',
     justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
