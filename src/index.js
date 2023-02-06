// eslint-disable-next-line import/namespace
import { ActivityIndicator, View } from "react-native";
import { useState } from "react";
import { useFonts } from 'expo-font';
import { Header } from "./components";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";
import { colors } from "./constants/themes/colors";

const App = () => {
  const [ loaded ] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('../assets/fonts/Poppins-ThinItalic.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const [ userNumber, setUserNumber ] = useState(null);

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator 
          size='large'
          color={colors.primary}
        />
      </View>
    )
  }
  
  const Content = () => ( userNumber ? <Game selectedNumber={userNumber} setUserNumber={setUserNumber}/> : <StartGame handlerStartGame={handlerStartGame}/>);
  
  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <Content />
    </View>
  );
};

export default App;
