import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

import colors from '../styles/colors';
import icons from '../styles/icons';

const Tab = createBottomTabNavigator()

const getTabs = () => {
    const tabs = [
        {
            name: 'Home',
            component: Home,
            // icon: icons.home,
        }
    ]

    return tabs.map(tab => (
        <Tab.Screen
            { ...tab }
        />
    ))
}

export default function TabRoute(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: 10,
                    borderRadius: 15,
                    backgroundColor: colors.primaryColor,
                }
            })}
        >   
            {getTabs()}
        </Tab.Navigator>
    )
}