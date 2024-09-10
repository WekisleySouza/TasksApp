import Spinner from 'react-native-loading-spinner-overlay';
import MyModal from '../MyModal';
import styles from './styles';

export default function ModalLoading({ isVisible, onCancel }){
    return (
        <MyModal
            isVisible={isVisible}
            onCancel={onCancel}
            style={styles.container}
        >
            <Spinner
                visible={isVisible}
                textContent='Carregando...'
                textStyle={{ 
                    fontSize: 18,
                    color: '#fff'
                }}
            />
        </MyModal>
    )
}