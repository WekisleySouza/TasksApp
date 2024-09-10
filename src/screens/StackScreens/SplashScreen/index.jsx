import { View } from 'react-native';
import styles from './styles';
import MyIcon from '../../../components/MyIcon';
import icons from '../../../styles/icons';
import { useEffect } from 'react';
import { getUserAsync } from '../../../data/asyncStorageFunctions';
import { setDefaultToken } from '../../../data/onlineAuth';

export default function SplashScreen({ navigation }){
    useEffect(() => {
        const goToNextPage = async () => {
            await getUserAsync().then(localUser => {
                if(localUser){
                    setDefaultToken(localUser.token)
                }
                navigation.navigate(localUser.token ? 'TabRoute' : 'Login')
            })
        }

        goToNextPage()
    }, [])

    return (
        <View style={styles.container} >
            <MyIcon
                style={styles.icon}
                icon={icons.logo}
            />
        </View>
    )
}