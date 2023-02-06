import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Game = ({ selectedNumber }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> This is the game</Text>
            <Text style={styles.numberText}>Your number is: {selectedNumber}</Text>
        </View>
    )
};

export default Game;