import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoute from './Tab.routes';
import Login from '../screens/StackScreens/Login';
import SplashScreen from '../screens/StackScreens/SplashScreen';

const Stack = createNativeStackNavigator()

const getStacks = () => {
    const stacks = [
        {
            name: 'TabRoute',
            component: TabRoute,
        },
        {
            name: 'Login',
            component: Login,
        },
        {
            name: 'SplashScreen',
            component: SplashScreen,
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

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'SplashScreen'}
            >
                {getStacks()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}