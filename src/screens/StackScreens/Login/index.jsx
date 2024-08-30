import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function Login(){
    const user = useSelector(state => state.userState)
    return (
        <View>
            <View>
                
            </View>
        </View>
    )
}