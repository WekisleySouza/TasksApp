import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

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
    },
    topTextContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainerText: {
        color: fonts.primaryColor,
        fontFamily: fonts.primaryFont,
        fontSize: 50,
    },
    topIconsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 22,
        paddingLeft: 40,
    },
    icon: {
        width: 40,
        height: 40,
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
    },
    flatListContainer: {
        marginTop: 30,
        width: '85%',
    },
    taskButton: {
        width: '100%',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: colors.secondaryColor,
        borderColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 30,
        right: 20,
        bottom: 10,
    },
    addIcon: {
        width: 30,
        height: 30,
    },
})