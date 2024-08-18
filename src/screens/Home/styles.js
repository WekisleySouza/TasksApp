import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '40%',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainerText: {
        color: fonts.primaryColor,
        fontFamily: fonts.primaryFont,
        fontSize: 50,
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
    },
    flatListContainer: {
        marginTop: 10,
        width: '85%',
    },
    taskButton: {
        width: '100%',
        marginBottom: 10,
    }
})