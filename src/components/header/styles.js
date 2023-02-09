import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fontSizes } from "../../constants/themes/fonts";

const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    maxHeight: 115,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    borderBottomColor: colors.primaryDark,
    borderBottomWidth: .8,
  },
  title: {
    fontSize: fontSizes.xlarge,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
  },
});
