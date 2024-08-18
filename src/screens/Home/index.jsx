import { FlatList, ImageBackground, Text, Touchable, TouchableOpacity, View } from 'react-native';
import images from '../../styles/images';
import styles from './styles';
import TaskButton from '../../components/TaskButton';
import tasks from '../../mock/tasks';
import MyIcon from '../../components/MyIcon';
import icons from '../../styles/icons';

export default function Home(){

    return (
        <View style={styles.container} >
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
                    renderItem={({ item }) => (
                        <TaskButton
                            style={styles.taskButton}
                            task={item}
                            onClick={() => console.log('Task clicked')}
                        />
                    )}
                />
            </View>
            <TouchableOpacity
                style={styles.addButton}
            >
                <MyIcon
                    style={styles.addIcon}
                    icon={icons.plus}
                />
            </TouchableOpacity>
        </View>
    )
}