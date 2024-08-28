import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 8,
    },
    buttonsContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    button: {
        backgroundColor: colors.secondaryColor,
        borderRadius: 10,
        height: 40,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: fonts.secondaryFont,
        color: fonts.primaryColor,
        fontSize: 18,
    },
})