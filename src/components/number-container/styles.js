import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/themes/fonts";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        marginBottom: 25,
        paddingBottom: 9,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,

    },
    number: {
        fontSize: fontSizes.large,
        fontWeight: 'bold',
        color: colors.text,
    },
});

