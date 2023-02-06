import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fontSizes } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white,
        width: '95%',
    },
    cardContent: {
        borderRadius: 15,
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginLeft: 33,
    },
    text: {
        fontSize: fontSizes.large,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        marginVertical: 15,
    },
    numberText: {
        fontSize: fontSizes.xlarge,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    homeButtonContainer: {
        flexDirection: 'row',
        minWidth: 80,
        justifyContent: 'center',
        marginTop: 55,
        marginLeft: 10,
    },
})