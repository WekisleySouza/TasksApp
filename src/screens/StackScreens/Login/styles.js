import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },
    headerText: {
        color: fonts.tertiaryColor,
        fontFamily: fonts.primaryFont,
        fontSize: 40,
    },
    icon: {
        height: 100,
        width: 100,
        tintColor: fonts.tertiaryColor,
    },
    bodyContainer: {
        flex: 2,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: colors.quartenaryColor,
        borderTopStartRadius: 10,
        borderTopEndRadius: 30,
        borderBottomWidth: 1,
        borderColor: colors.tertiaryColor,
        padding: 20,
        color: '#000'
    },
    button: {
        backgroundColor: colors.secondaryColor,
        width: '40%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    buttonText: {
        color: fonts.primaryColor,
        fontFamily: fonts.secondaryFont,
        fontSize: 19,
    },
    changePageText: {
        fontFamily: fonts.secondaryFont,
        color: fonts.primaryColor,
        fontSize: 14,
        textDecorationLine: 'underline',
        textDecorationColor: colors.secondaryColor,
    },
})