import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import MyModal from '../MyModal';

import Task from '../../models/Task';
import styles from './styles';
import MyDateTimePicker from '../MyDateTimePicker';
import { dateToStringDate, dateToStringHour, showError } from '../../functions/aux';
import { saveTaskOnline } from '../../data/onlineStorage';

export default function ModalAddTask({ isVisible, onCancel }){
    const [task, setTask] = useState({
        title: '',
        description: '',
        toDoDate: new Date(),
        duration: 0,
        doneDate: null,
    })
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleConfirm = async () => {
        await saveTaskOnline(task).then(id => {
            if(id){
                onCancel()
            } else {
                showError('Não foi possível salvar a tarefa!')
            }
        })
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
                            value={task.title}
                            onChangeText={title => setTask({ ...task, title })}
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
                            onChangeText={description => setTask({ ...task, description })}
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