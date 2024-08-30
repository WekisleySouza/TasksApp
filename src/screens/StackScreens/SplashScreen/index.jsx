import { View } from 'react-native';
import styles from './styles';
import MyIcon from '../../../components/MyIcon';
import icons from '../../../styles/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localAutentication } from '../../../redux/userStateSlice';
import { wait } from '../../../functions/aux';

export default function SplashScreen({ navigation }){
    const [userIsUpdated, serUserIsUpdated] = useState(false)
    const user = useSelector(state => state.userState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(localAutentication())
    }, [])

    useEffect(() => {
        const goToNextPage = async () => {
            await wait(3000)
            navigation.navigate(user.isLogged ? 'TabNavigator' : 'Login')
        }
        goToNextPage()
    }, [user])

    return (
        <View style={styles.container} >
            <MyIcon
                style={styles.icon}
                icon={icons.logo}
            />
        </View>
    )
}