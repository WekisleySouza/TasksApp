import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import MyModal from '../MyModal';

import Task from '../../models/Task';
import styles from './styles';

export default function ModalAddTask({ isVisible, onCancel, tasksState }){
    const [task, setTask] = useState(new Task())
    const handleConfirm = () => {

    }

    return (
        <MyModal
            isVisible={isVisible}
            onCancel={onCancel}
            style={styles.container}
        >
                <View style={styles.titleContainer} >
                    <TextInput
                        style={[styles.input, styles.titleInput]}
                        placeholder='Título da Tarefa'
                        onChangeText={text => setTask({ ...task, title: text })}
                    />
                </View>
                <View style={styles.dateTimeContainer} >
                    <TouchableOpacity 
                        style={[styles.input, styles.dateTimeInput]}
                    >
                        <Text style={styles.dateTimeText} >
                            00/00/0000
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.input, styles.dateTimeInput]}
                    >
                        <Text style={styles.dateTimeText} >
                            00:00-01:00
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptionContainer} >
                    <TextInput
                        style={[styles.input, styles.descriptionInput]}
                        placeholder='Descreva a tarefa aqui...'
                        onChangeText={text => setTask({ ...task, description: text })}
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
        </MyModal>
    )
}