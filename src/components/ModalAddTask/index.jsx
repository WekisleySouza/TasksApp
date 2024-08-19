import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MyModal from '../MyModal';
import styles from './styles';
import fonts from '../../styles/fonts';

export default function ModalAddTask({
    isVisible, onCancel
}){

    return (
        <MyModal
            isVisible={isVisible}
            onCancel={onCancel}
            style={styles.container}
        >
            <ScrollView
                style={styles.scroll}
            >
                <View style={styles.titleContainer} >
                    <TextInput
                        placeholder='Título da Tarefa'
                        style={[styles.input, styles.titleInput]}
                    />
                </View>
                <View style={styles.dateTimeContainer} >
                    <TextInput
                        placeholder='00/00/0000'
                        style={[styles.input, styles.dateTimeInput]}
                    />
                    <TextInput
                        placeholder='00:00-01:00'
                        style={[styles.input, styles.dateTimeInput]}
                    />
                </View>
                <View style={styles.descriptionContainer} >
                    <TextInput
                        placeholder='Descreva a tarefa aqui...'
                        style={[styles.input, styles.descriptionInput]}
                    />
                </View>
                <View style={styles.buttonsContainer} >
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                    >
                        <Text style={styles.buttonText}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                    >
                        <Text style={styles.buttonText}>
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </MyModal>
    )
}