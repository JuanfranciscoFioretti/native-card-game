import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/themes/fonts";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    cardContent: {
        flex: 1,
        borderRadius: 15,
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginLeft: 33,
        justifyContent: 'center',
        
    },
    // cardContentLandScape: {
    //     height: '110%',
    //     width: '80%',
    // },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: '70%',
        marginHorizontal: -15,
        marginTop: -15,
        paddingTop: -3,
    },
    landScapeImage: {
        height: '110%',
    },
    greyContainer: {
        backgroundColor: colors.backgroundlight,
        opacity: 0.70,
        height: '112%',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 15,
    },
    textSubTitleContainer: {
        width: '90%',
        marginLeft: '6.5%',
        marginTop: 160,
        flexDirection: 'column',
    },
    textSubTitle: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: fontSizes.large,
        color: colors.black,
    },
    text: {
        fontFamily: 'Poppins-Italic',
        color: colors.red,
        fontSize: fontSizes.medium,
    }
});