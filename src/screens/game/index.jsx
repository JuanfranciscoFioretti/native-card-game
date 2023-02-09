import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert, ScrollView } from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = ({ selectedNumber, setUserNumber }) => {
    const [ currentGuess, setCurrentGuess ] = useState(generateRandomNumber(1, 100, selectedNumber));

    const [ rounds, setRounds ] = useState(0);

    const currentLowest = useRef(1);
    const currentHighest = useRef(100);

    useEffect(() => {
        if(currentGuess === selectedNumber) handlerGameOver(rounds);
    }, [ currentGuess, selectedNumber, handlerGameOver ]);

    const handlerNextGuess = (direction) => {
        if(
            direction === 'lower' && currentGuess < selectedNumber ||
            direction === 'higher' && currentGuess > selectedNumber
        ) {
            Alert.alert(
                'Come on!', 
                'You know you going in the wrong direction..',
                [{ text: 'Sorry!', style: 'cancel' },]);
                return;
        }

        if (direction === 'lower') {
            currentHighest.current == currentGuess;
        } else {
            currentLowest.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLowest.current, currentHighest.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds((rounds) => rounds + 1);
    };

    const handlerGameOver = () => {
        setCurrentGuess(0);
    }


    return(
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Card style={styles.cardContent}>
                    <Text style={styles.text}> Reach your previous number</Text>
                    <NumberContainer number={currentGuess}/>
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Minor'
                            onPress={() => handlerNextGuess('lower')}
                            color={colors.primary}
                        />
                        <Button
                            title='Major'
                            onPress={() => handlerNextGuess('higher')}
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

        </ScrollView>
    )
};

export default Game;