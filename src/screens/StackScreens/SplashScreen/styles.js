import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondaryColor,
    },
    icon: {
        height: 200,
        width: 200,
        tintColor: colors.primaryColor,
    }
})