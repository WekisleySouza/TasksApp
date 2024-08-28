import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import MyModal from '../MyModal';

import Task from '../../models/Task';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksStateSlice';
import MyDateTimePicker from '../MyDateTimePicker';
import { dateToStringDate, dateToStringHour } from '../../functions/aux';

export default function ModalAddTask({ isVisible, onCancel }){
    const [task, _ ] = useState(new Task())
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const dispatch = useDispatch()

    const handleConfirm = () => {
        dispatch(addTask(task.taskToSlice))
        onCancel()
    }

    return (
        <MyModal
            isVisible={isVisible}
            onCancel={onCancel}
            style={styles.container}
        >
            {
                showTimePicker
                ? 
                <MyDateTimePicker
                    date={task.toDoDate}
                    setDate={date => { task.toDoDate = date }}
                    mode='time'
                    onConfirm={() => setShowTimePicker(false)}
                />
                :
                showDatePicker
                ? 
                <MyDateTimePicker
                    date={task.toDoDate}
                    setDate={date => { task.toDoDate = date }}
                    mode='date'
                    onConfirm={() => setShowDatePicker(false)}
                />
                : 
                <View
                    style={styles.subContainer}
                >
                    <View style={styles.titleContainer} >
                        <TextInput
                            style={[styles.input, styles.titleInput]}
                            placeholder='Título da Tarefa'
                            onChangeText={text => { task.title = text }}
                        />
                    </View>
                    <View style={styles.dateTimeContainer} >
                        <TouchableOpacity 
                            style={[styles.input, styles.dateTimeInput]}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={styles.dateTimeText} >
                                {dateToStringDate(task.toDoDate)}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.input, styles.dateTimeInput]}
                            onPress={() => setShowTimePicker(true)}
                        >
                            <Text style={styles.dateTimeText} >
                                {dateToStringHour(task.toDoDate)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descriptionContainer} >
                        <TextInput
                            style={[styles.input, styles.descriptionInput]}
                            multiline={true}
                            placeholder='Descreva a tarefa aqui...'
                            onChangeText={text => { task.description = text }}
                        />
                    </View>
                    <View style={styles.buttonsContainer} >
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.buttonText}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.confirmButton]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.buttonText}>
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </MyModal>
    )
}