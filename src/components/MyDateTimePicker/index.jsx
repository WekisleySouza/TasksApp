import DatePicker from 'react-native-date-picker';
import colors from '../../styles/colors';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function MyDateTimePicker({
    date,
    mode,
    setDate,
    onConfirm
}){
    return (
        <View style={styles.container}>
            <DatePicker 
                date={date} 
                onDateChange={setDate}
                mode={mode}
                dividerColor={colors.quartenaryColor}
                style={{
                    
                }}
            />
            <View style={styles.buttonsContainer} >
                <TouchableOpacity
                    style={styles.button}
                    onPress={onConfirm}
                >
                    <Text style={styles.buttonText}>
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}