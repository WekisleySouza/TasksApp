import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        height: 350,
        width: '90%',
        backgroundColor: colors.primaryColor,
        padding: 20,
        borderRadius: 20,
        gap: 15
    },
    input: {
        padding: 10,
        fontSize: 18,
        fontFamily: fonts.secondaryFont,
        borderBottomWidth: 2,
        borderBottomColor: colors.tertiaryColor,
        backgroundColor: colors.quartenaryColor,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
    },
    titleContainer: {
        height: 50,
    },
    titleInput: {
        height: 50,
        fontFamily: fonts.primaryFont,
        fontSize: 20,
        backgroundColor: colors.primaryColor,
    },
    dateTimeContainer: {
        height: 50, 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateTimeInput: {
        height: 40,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateTimeText: {
        fontFamily: fonts.secondaryFont,
        color: fonts.primaryColor,
        fontSize: 18,
    },
    descriptionContainer: {
        height: 70,
        width: '100%',
    },
    descriptionInput: {
        height: 70,
        width: '100%',
        borderBottomWidth: 0,
        borderTopWidth: 1,
        borderTopColor: colors.tertiaryColor,
    },
    buttonsContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    button: {
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
    cancelButton: {
        backgroundColor: colors.primaryColor,
        borderColor: colors.secondaryColor,
        borderWidth: 1,
    },
    confirmButton: {
        backgroundColor: colors.secondaryColor,
    },
})