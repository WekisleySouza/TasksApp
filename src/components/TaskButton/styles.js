import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        width: '90%',
        height: 77,
        borderRadius: 9,
        flexDirection: 'column',
    },
    topContainer: {
        flex: 4,
        flexDirection: 'row',
        marginBottom: 1,
    },
    topCheckContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 4,
    },
    topNameContainer: {
        flex: 9,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginStart: 10,
    },
    bottomContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginEnd: 23,
    },
    text: {
        color: fonts.secondaryColor,
        fontFamily: fonts.secondaryFont,
    },
    textTitle: {
        fontSize: 23,
    },
    textHours: {
        fontSize: 17,
    },
})