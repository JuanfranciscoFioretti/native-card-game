// eslint-disable-next-line import/namespace
import { ActivityIndicator, Button, View, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from 'expo-font';
import { Header } from "./components";
import { StartGame, Game, GameOver } from "./screens";
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

  const [ guessRounds, setGuessRounds ] = useState(2);

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  // const handlerGameOver = (rounds) => {
  //   setGuessRounds(rounds);
  // }
  
  const Content = () => {

    if ( userNumber && guessRounds <= 0 ) {
      return (
        <Game selectedNumber={userNumber} setUserNumber={setUserNumber}/>
      )
    }

    // DESDE ACÁ COMIENZA EL ESTILIZADO CONDICIONAL SOBRE LA DISPOSICION DE LA PANTALLA
    const [ isPortrait, setIsPortrait ] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    const statePortrait = () => {
        setIsPortrait(onPortrait);
    };

    useEffect(() => {
        const suscription = Dimensions.addEventListener('change', statePortrait);

        return () => {
            suscription.remove();
        };
    });
    // ACÁ TERMINA EL ESTILIZADO PARA LA DIRECCIÓN DE LA PANTALLA

    if (guessRounds > 0 ) {
      return (
        <View style={ isPortrait ? styles.gameOverContainer : styles.contentLandscape}>
          <GameOver rounds={guessRounds} selectedNumber={userNumber} isPortrait={isPortrait}/>
          <View style={styles.homeButtonContainer}>
            <Button 
              title="Play Again"
              onPress={() => {
                setGuessRounds(0);
              }}
              color={colors.red}
            />
          </View>
        </View>
      );
    }

    return <StartGame handlerStartGame={handlerStartGame}/>

  };

  
    if(!loaded) {
      return (
        <View style={styles.containerLoader}>
          <ActivityIndicator 
            size='large'
            color={colors.primary}
          />
        </View>
      );
    }

  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <Content />
    </View>
  );
};

export default App;
