import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";

export const StartGame = ({ handlerStartGame }) => {
  const [ enteredValue, setEnteredValue ] = useState("");
  const [ confirmed, setConfirmed ] = useState(false);
  const [ selectedNumber, setSelectedNumber ] = useState(null);

  onHandlerChange = (text) => {
    setEnteredValue(text);
    // .replace(/[^0-9]/g, "")
  };

  const handlerRestartNumber = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const handlerConfirmNumber = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid number', 'The number has to be between 1 & 99', [
        { text: 'OK', style: 'destructive', onPress: handlerRestartNumber }
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
    }
  }

  const onHandlerStartGame = () => {
    handlerStartGame(selectedNumber); 
  }

  const Confirmed = () => confirmed ? (
    <Card style={styles.confirmedContainer}>
      <View style={styles.confirmedTitleContainer}>
        <Text style={styles.confirmedTitle}> The selected number is: </Text>
      </View>
      <NumberContainer number={selectedNumber}/>
      <Button
        title='Start Game'
        onPress={onHandlerStartGame}
        color={colors.primary}
      />
    </Card>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Type any number</Text>
          <TextInput 
            value={enteredValue} 
            style={styles.input} 
            keyboardType="numeric" 
            placeholder="0"
            onChangeText={onHandlerChange}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.buttons}
              title="Restart"
              onPress={handlerRestartNumber}
              color={colors.secondary}
            />
            <Button
              style={styles.buttons}
              title="Confirm"
              onPress={handlerConfirmNumber}
              color={colors.primary}
            />
          </View>
        </Card>
        <Confirmed/>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
