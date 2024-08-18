import { Image } from 'react-native';
import styles from './styles'
import icons from '../../styles/icons';

export default function({ icon, style }){
    return (
        <Image
            source={icon || icons.home}
            style={[styles.icon, {...style}]}
        />
    )
}