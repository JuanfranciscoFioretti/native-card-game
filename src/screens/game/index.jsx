import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.floor(min);
    max = Math.ceil(max);
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = ({ selectedNumber, setUserNumber }) => {
    const [ currentGuess, setCurrentGuess ] = useState(generateRandomNumber(1, 100, selectedNumber));
    return(
        <View style={styles.container}>
            <Card style={styles.cardContent}>
                <Text style={styles.text}> Reach your previous number</Text>
                <NumberContainer number={currentGuess}/>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Minor'
                        onPress={()=>{}}
                        color={colors.primary}
                    />
                    <Button
                        title='Major'
                        onPress={()=>{}}
                        color={colors.primary}
                    />
                </View>
            </Card>
            <View style={styles.homeButtonContainer}>
                <Button 
                    title="Go Back Home"
                    onPress={() => {
                        setUserNumber(null);
                    }}
                    color={colors.red}
                />
            </View>
        </View>
    )
};

export default Game;