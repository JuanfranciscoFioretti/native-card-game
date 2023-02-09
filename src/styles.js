import { StyleSheet } from "react-native";
import { colors } from "./constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        maxHeight: 500,
    },
    contentLandscape: {
        flex: 1,
        width: '80%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'space-around',
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: colors.white,
    },
    gameOverContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.white,
        width: '95%',
        marginTop: 20,
    },
    homeButtonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
        marginLeft: 18,
    },
});