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
                <View style={styles.topNameContainer} >
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onClick={onClick}
                    >
                        <View style={styles.topNameContainer} >
                            <Text style={[styles.text, styles.textTitle]} >
                                {task.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer} >
                <Text style={[styles.text, styles.textHours]} >
                    {dateToStringHour(new Date(task.toDoDate))}
                </Text>
            </View>
        </View>
    )
}