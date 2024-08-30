import { AppState, FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import images from '../../../styles/images';
import styles from './styles';
import TaskButton from '../../../components/TaskButton';
import MyIcon from '../../../components/MyIcon';
import icons from '../../../styles/icons';
import { useEffect, useState } from 'react';
import ModalAddTask from '../../../components/ModalAddTask';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, saveTasks } from '../../../redux/tasksStateSlice';
import ModalTask from '../../../components/ModalTask/index';

export default function Home(){
    const tasks = useSelector(state => state.tasksState)
    const [showAddPopup, setShowAddPopup] = useState(false)
    const [showTaskPopup, setShowTaskPopup] = useState(false)
    const [selectedTask, setSelectedTask] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
          if (nextAppState === 'background' || nextAppState === 'inactive') {
            dispatch(saveTasks())
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
                                22 de
                            </Text>
                            <Text style={styles.topContainerText} >
                                Agosto
                            </Text>
                        </View>
                        <View style={styles.topIconsContainer} >
                            <MyIcon
                                icon={icons.calendar}
                                style={styles.icon}
                            />
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