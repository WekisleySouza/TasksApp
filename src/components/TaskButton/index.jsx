import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CheckBox from '../CheckBox';

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
                    15:00-16:00
                </Text>
            </View>
        </View>
    )
}