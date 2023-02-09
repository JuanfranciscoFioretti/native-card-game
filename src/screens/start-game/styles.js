import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fontSizes } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        height: 500,
    },
    containerScroll: {
        flex: 1,
    },
    title: {
        fontSize: fontSizes.large,
        fontFamily: 'Poppins-BoldItalic',
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    typeAnyNumber: {
        fontFamily: 'Poppins-SemiBold',
    },
    label: {
        fontSize: fontSizes.medium,
        color: colors.text,
        paddingVertical: 5,
        textAlign: 'center',
    },
    input: {
        width: '75%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: fontSizes.xlarge,
        fontFamily: 'Poppins-Black',
        paddingVertical: 10,
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    buttons: {
        marginHorizontal: 1,
    },
    confirmedContainer: {
        width: '90%',
        padding: 20,
        marginTop: 50,
        marginHorizontal: 20,
        borderRadius: 15,
    },
    confirmedTitleContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 20,
    },
    confirmedTitle: {
        fontSize: fontSizes.medium,
        fontFamily: 'Poppins-SemiBold',
    },
});
