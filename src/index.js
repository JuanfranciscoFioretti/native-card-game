import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Suri tatuate una pija por favor</Text>
      <StatusBar style="auto" />
    </View>
  );
}


export default App;
