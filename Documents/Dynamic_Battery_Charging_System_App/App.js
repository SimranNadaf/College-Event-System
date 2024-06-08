// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.Title}>Dynamic Master Battery Charging System</Text>
     <Button style={styles.button} title='LogIn' onPress={() => alert('Right button pressed')}/>
     <Button style={styles.button} title='SignUp'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E7D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    color: "#183D3D",
  },
  button: {
    backgroundColor: "#FFF",
  }
});
