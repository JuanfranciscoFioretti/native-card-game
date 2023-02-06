import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fontSizes } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    text: {
        fontSize: fontSizes.large,
    },
    numberText: {
        fontSize: fontSizes.xlarge,
    },
})