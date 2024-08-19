import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';
import icons from '../styles/icons';

import { StyleSheet } from 'react-native';

import MyIcon from '../components/MyIcon';
import Home from '../screens/TabScreens/Home';
import Tasks from '../screens/TabScreens/Tasks';
import Settings from '../screens/TabScreens/Settings';

const Tab = createBottomTabNavigator()

const getTabs = () => {
    const tabs = [
        {
            name: 'Settings',
            component: Settings,
            icon: icons.settings,
            focused_icon: icons.settings_focused
        },
        {
            name: 'Home',
            component: Home,
            icon: icons.home,
            focused_icon: icons.home_focused
        },
        {
            name: 'Tasks',
            component: Tasks,
            icon: icons.tasks,
            focused_icon: icons.tasks_focused
        },
    ]

    return tabs.map((tab, index) => (
        <Tab.Screen
            key={index}
            { ...tab }
            options={{
                tabBarIcon: ({focused}) => (
                    <MyIcon
                        icon={focused ? tab.focused_icon : tab.icon}
                        style={styles.icon}
                    />
                ),
                tabBarLabel: () => false
            }}
        />
    ))
}

export default function TabRoute(){
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 68,
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: 10,
                    borderRadius: 15,
                    backgroundColor: colors.primaryColor,
                    alignItems: 'center',
                }
            })}
        >   
            {getTabs()}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 33,
        height: 33,
    }
})