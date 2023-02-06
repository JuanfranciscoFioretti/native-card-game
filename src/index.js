// eslint-disable-next-line import/namespace
import { View } from "react-native";
import { useState } from "react";
import { Header } from "./components";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";

const App = () => {
  const [ userNumber, setUserNumber ] = useState(null);

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  
  const Content = () => ( userNumber ? <Game selectedNumber={userNumber}/> : <StartGame handlerStartGame={handlerStartGame}/>);
  
  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <Content />
    </View>
  );
};

export default App;
