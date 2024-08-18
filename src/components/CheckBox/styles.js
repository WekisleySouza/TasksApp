import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        borderColor: colors.tertiaryColor,
        backgroundColor:  'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 22,
        height: 22,
        borderWidth: 1,
        borderRadius: 7,
    },
    myIcon: {
        width: 15,
        height: 15,
    },
})