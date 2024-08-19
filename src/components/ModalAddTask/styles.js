import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 10,
        width: '90%',
        backgroundColor: colors.primaryColor,
        padding: 20,
        borderRadius: 20,
    },
    scroll: {
        // backgroundColor: colors.secondaryColor,
    },
    input: {
        padding: 10,
        fontSize: 15,
        fontFamily: fonts.primaryFont,
        borderBottomWidth: 1,
        borderBottomColor: colors.tertiaryColor,
        backgroundColor: colors.quartenaryColor,
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
    },
    titleContainer: {
        height: 50,
        marginBottom: 25,
    },
    titleInput: {
        fontSize: 20,
        height: 50,
        backgroundColor: colors.primaryColor,
    },
    dateTimeContainer: {
        height: 40,
        marginBottom: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    dateTimeInput: {
        height: 37,
        
        width: '40%',
    },
    descriptionContainer: {
        height: 300,
        width: '100%',
        // backgroundColor: 'blue',
    },
    descriptionInput: {
        height: 300,
        width: '100%',
        borderBottomWidth: 0,
        borderTopWidth: 1,
        borderTopColor: colors.tertiaryColor,
        backgroundColor: colors.quartenaryColor,
        // backgroundColor: 'blue',
    },
    buttonsContainer: {
        // backgroundColor: 'green',
        height: 50,
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
        color: fonts.primaryColor,
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