import { AppState, FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import images from '../../../styles/images';
import styles from './styles';
import TaskButton from '../../../components/TaskButton';
import MyIcon from '../../../components/MyIcon';
import icons from '../../../styles/icons';
import { useEffect, useState } from 'react';
import ModalAddTask from '../../../components/ModalAddTask';
import ModalTask from '../../../components/ModalTask/index';
import { storeTasksAsync, storeUserAsync } from '../../../data/asyncStorageFunctions';
import { getTasksOnline, toggleTaskOnline } from '../../../data/onlineStorage';
import { showError, wait } from '../../../functions/aux';
import months from '../../../mock/months';

export default function Home({ navigation }){
    const [tasks, setTasks] = useState([])
    const [showAddPopup, setShowAddPopup] = useState(false)
    const [showTaskPopup, setShowTaskPopup] = useState(false)
    const [selectedTask, setSelectedTask] = useState({})
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const getTasks = async () => {
            await wait(10)
            await getTasksOnline().then((tasks) => {
                if(tasks) {
                    const newTasks = tasks.map((task) => { 
                        return {
                            ...task,
                            toDoDate: new Date(task.toDoDate),
                            doneDate: task.doneDate ? new Date(task.doneDate) : null,
                        }
                    })
                    setTasks(newTasks)
                }else{
                    showError('Não foi possível carregar as tarefas!')
                }
            })
        }

        if(!showAddPopup && !showTaskPopup){
            getTasks()
        }
    }, [showAddPopup, showTaskPopup])
    
    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
            if (nextAppState === 'background' || nextAppState === 'inactive') {
                storeTasksAsync(tasks)
            }
        };
        
        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        };
    }, []);

    const handleShowTaskPopup = (task) => {
        setSelectedTask(task)
        setShowTaskPopup(true)
    }

    const handleOnCheck = async (task) => {
    }

    const logout = () => {
        storeTasksAsync(null)
        storeUserAsync(null)
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container} >
            <ModalTask
                taskProp={selectedTask}
                isVisible={showTaskPopup}
                onCancel={() => setShowTaskPopup(false)}
            />
            <ModalAddTask
                isVisible={showAddPopup}
                onCancel={() => setShowAddPopup(false)}
            />
            <View style={styles.backgroundImage} >
                <ImageBackground
                    source={images.background_home}
                    style={{ flex: 1 }}
                >
                    <View style={styles.topContainer} >
                        <View style={styles.topTextContainer} >
                            <Text style={styles.topContainerText} >
                                {`${currentDate.getDate()} de`}
                            </Text>
                            <Text style={styles.topContainerText} >
                                {months[currentDate.getMonth() - 1]}
                            </Text>
                        </View>
                        <View style={styles.topIconsContainer} >
                            <MyIcon
                                icon={icons.calendar}
                                style={styles.icon}
                            />
                            <TouchableOpacity
                                onPress={logout}
                            > 
                                <MyIcon
                                    icon={icons.logout}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.bottomContainer} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatListContainer}
                    keyExtractor={(_, index) => index}
                    data={tasks}
                    extraData={tasks}
                    renderItem={({ item }) => (
                        <TaskButton
                            style={styles.taskButton}
                            task={item}
                            onClick={() => handleShowTaskPopup(item)}
                            onCheck={() => handleOnCheck(item)}
                        />
                    )}
                />
            </View>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setShowAddPopup(true)}
            >
                <MyIcon
                    style={styles.addIcon}
                    icon={icons.plus}
                />
            </TouchableOpacity>
        </View>
    )
}