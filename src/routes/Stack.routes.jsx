import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoute from './Tab.routes';
import Login from '../screens/StackScreens/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()

const getStacks = () => {
    const stacks = [
        {
            name: 'TabNavigator',
            component: TabRoute,
        },
        {
            name: 'Login',
            component: Login,
        },
    ]

    return stacks.map((tab, index) => (
        <Stack.Screen
            key={index}
            { ...tab }
            options={{
                header: () => false,
            }}
        />
    ))
}

export default function StackRoute(){
    const user = useSelector(state => state.userState)

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user.isLogged ? 'TabNavigator' : 'Login'}
            >
                {getStacks()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}