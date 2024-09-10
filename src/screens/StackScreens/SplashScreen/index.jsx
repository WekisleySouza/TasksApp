import { View } from 'react-native';
import styles from './styles';
import MyIcon from '../../../components/MyIcon';
import icons from '../../../styles/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wait } from '../../../functions/aux';

export default function SplashScreen({ navigation }){
    const user = useSelector(state => state.userState)

    useEffect(() => {

    }, [])

    useEffect(() => {
        const goToNextPage = async () => {
            await wait(3000)
            navigation.navigate(user.isLogged ? 'Home' : 'Login')
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