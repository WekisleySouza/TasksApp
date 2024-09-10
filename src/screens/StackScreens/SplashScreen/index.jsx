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
            let logged = false;
            await getUserAsync().then(localUser => {
                if(localUser){
                    logged = true
                    setDefaultToken(localUser.token)
                }
                navigation.navigate(logged ? 'TabRoute' : 'Login')
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