import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CheckBox from '../CheckBox';
import { dateToStringHour } from '../../functions/aux';

export default function TaskButton({ task, onClick, style }){
    return (
        <View style={[ styles.container, style ]} >
            <View style={styles.topContainer} >
                <View style={styles.topCheckContainer} >
                    <CheckBox
                        checked={task && task.checked}
                    />
                </View>
                <TouchableOpacity
                    style={styles.topNameContainer}
                    onPress={onClick}
                >
                    <Text style={[styles.text, styles.textTitle]} >
                        {task.title}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer} >
                <Text style={[styles.text, styles.textHours]} >
                    {dateToStringHour(new Date(task.toDoDate))}
                </Text>
            </View>
        </View>
    )
}