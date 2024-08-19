import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: colors.primaryColor,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    dummyArea: {
        flex: 1,
    },
})