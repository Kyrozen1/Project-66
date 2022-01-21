import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import { SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
    }
  }
  speak=()=>{
    var thingToSay = this.state.name;
    Speech.speak(thingToSay)
  }
  render(){
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
      <Header
          backgroundColor={'#03C0C1'}
          centerComponent={{
            text: 'Text To Speech Converter',
            style: { color: '#000000', fontSize: 15, fontWeight: 'bold' },
          }}
        />
        <Text style={styles.text}>Enter The Word</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={name => {
            this.setState({ name: name });
          }}
          value={this.state.name}
        />
        <TouchableOpacity 
          style={styles.searchBox} 
          onPress={()=>{
            var format = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
            this.state.name===""?alert("Input a word"):this.speak()
            this.state.name===format?alert("Don't use special characters"):this.speak()
          }}>
          <Text style={styles.textBox}>Click Here To Hear Speech</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  text:{
    marginTop:30,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'20',
  },
  searchBox:{
    width:210,
    height:70,
    marginTop:50,
    marginLeft:60,
    backgroundColor:'#03C0C1',
    borderRadius:50,
    alignContent:'center',
  },
  textBox:{
    fontWeight:'bold',
    textAlign:'center',
    textSize:15,
    marginTop:25,
  }
})