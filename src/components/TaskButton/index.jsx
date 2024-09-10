import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CheckBox from '../CheckBox';
import { dateToStringHour } from '../../functions/aux';

export default function TaskButton({ task, onCheck, onClick, style }){
    return (
        <View style={[ styles.container, style ]} >
            <View style={styles.topContainer} >
                <TouchableOpacity
                    style={styles.topCheckContainer}
                    onPress={onCheck}
                >
                    <CheckBox
                        checked={task && task.checked}
                    />
                </TouchableOpacity>
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