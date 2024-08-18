import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import MyIcon from '../MyIcon';
import icons from '../../styles/icons';

export default function CheckBox({ checked, onCheck, style }){
    
    return (
        <View style={[styles.container, style]} >
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={onCheck}
            >
                <View style={[styles.container, style]} >
                    {   
                        !!checked
                        &&
                        <MyIcon
                            style={styles.myIcon}
                            icon={[icons.check]}
                        />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}