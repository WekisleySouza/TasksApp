import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import MyModal from '../MyModal';

import Task from '../../models/Task';
import styles from './styles';
import { useDispatch } from 'react-redux';
import MyDateTimePicker from '../MyDateTimePicker';
import { dateToStringDate, dateToStringHour } from '../../functions/aux';
import { saveTaskOnline } from '../../data/onlineStorage';
import { addTask } from '../../redux/tasksStateSlice';

export default function ModalAddTask({ isVisible, onCancel }){
    const [task, setTask] = useState(new Task())
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const dispatch = useDispatch()

    const handleConfirm = async () => {
        const id = await saveTaskOnline(task.taskToSlice)
        dispatch(addTask({ ...task.taskToSlice, id }))
        onCancel()
    }

    const handleTitleChange = (text) => {
        setTask(new Task(text, task.description, task.toDoDate, task.duration, task.doneDate));
    };

    const handleDescriptionChange = (text) => {
        setTask(new Task(task.title, text, task.toDoDate, task.duration, task.doneDate));
    };
    
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
                            value={task.title}
                            onChangeText={handleTitleChange}
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
                            value={task.description}
                            onChangeText={handleDescriptionChange}
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