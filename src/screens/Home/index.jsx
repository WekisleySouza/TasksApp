import { ImageBackground, Text, View } from 'react-native';
import images from '../../styles/images';
import styles from './styles';

export default function Home(){
    return (
        <View style={styles.container} >
            <View style={styles.backgroundImage} >
                <ImageBackground
                    source={images.background_home}
                    style={{ flex: 1 }}
                >
                    <View style={styles.topContainer} >
                        <Text style={styles.topContainerText} >
                            22 de
                        </Text>
                        <Text style={styles.topContainerText} >
                            Agosto
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        </View>
    )
}