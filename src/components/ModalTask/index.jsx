import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MyModal from '../MyModal';
import styles from './styles';
import Task from '../../models/Task';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { dateToStringDate, dateToStringHour } from '../../functions/aux';
import MyDateTimePicker from '../MyDateTimePicker';
import MyIcon from '../MyIcon';
import icons from '../../styles/icons';
import { removeTask, toggleTask, updateTask } from '../../redux/tasksStateSlice';

export default function ModalTask({ isVisible, onCancel, taskProp }){
    const [task, setTask] = useState(new Task())
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setTask(new Task(taskProp.title, taskProp.description, taskProp.toDoDate, taskProp.duration, taskProp.doneDate))
    }, [taskProp])

    const handleConfirm = () => {
        dispatch(updateTask(task.taskToSlice))
        onCancel()
    }
    
    const handleDeleteTask = () => {
        dispatch(removeTask(task.taskToSlice))
        onCancel()
    }
    
    const handleToggleTask = () => {
        dispatch(toggleTask(task.taskToSlice))
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
                    <View style={styles.otherButtonsContainer} >
                        <TouchableOpacity
                            onPress={handleToggleTask}
                        >
                            <MyIcon
                                icon={icons.cancell}
                                style={styles.icons}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleDeleteTask}
                        >
                            <MyIcon
                                icon={icons.trash}
                                style={styles.icons}
                            />
                        </TouchableOpacity>
                    </View>
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