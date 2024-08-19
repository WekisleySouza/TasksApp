import { View, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function MyModal({
    isVisible, onCancel, 
    style, children
}){
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            onRequestClose={onCancel}
            animationType="fade"
        >
            <View style={styles.modal} >
                <TouchableOpacity 
                    style={styles.dummyArea}
                    onPress={onCancel}
                />
                <View style={[styles.container, style]} >
                    {children}
                </View>
                <TouchableOpacity 
                    style={styles.dummyArea}
                    onPress={onCancel}
                />
            </View>
        </Modal>
    )
}