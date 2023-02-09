import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Card } from "../../components";
import { styles } from "./styles";


const GameOver = ({ rounds, selectedNumber, isPortrait }) => {

    return(
        <ScrollView>
            <Card style={styles.cardContent}>
                <ImageBackground
                    resizeMode='cover'
                    source={
                        require ('../../../assets/images/image7.svg')
                    }
                    style={ isPortrait ? styles.image : styles.landScapeImage }
                >   
                    <View style={styles.greyContainer}>
                        {/* Text style={styles.textTitle}>Game over</Text>< */}
                        <View style={styles.textSubTitleContainer}>
                            <Text style={styles.textSubTitle}>Congratulations! You reached your previous number.</Text>
                            <Text style={styles.text}>Rounds: {rounds}</Text>
                            <Text style={styles.text}>selectedNumber: {selectedNumber}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </Card>
        </ScrollView>
    );
};



export default GameOver;