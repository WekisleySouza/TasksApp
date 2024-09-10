import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import MyIcon from '../../../components/MyIcon';
import icons from '../../../styles/icons';
import { useEffect, useState } from 'react';
import User from '../../../models/User';
import colors from '../../../styles/colors';
import { signin, signup } from '../../../data/onlineAuth';
import { storeUserAsync } from '../../../data/asyncStorageFunctions';
import ModalLoading from '../../../components/ModalLoading';

export default function Login({ navigation }){
    const [user, setUser] = useState(new User())
    const [hasAccount, setHasAccount] = useState(true)
    const [fieldsIsValid, setFieldsIsValid] = useState(true)
    const [showLoading, setShowLoading] = useState(false)
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    useEffect(() => {
        const changeFieldsValidation = () => {
            const validation = user.email.includes('.')
                && user.email.includes('@')
                && user.email.length > 5
                && user.password.length >= 6
                && (hasAccount
                || (user.password === passwordConfirmation
                && user.name.length > 1))
            setFieldsIsValid(validation)
        }
        changeFieldsValidation()
    }, [user])

    useEffect(() => {
        setUser(new User())
    }, [hasAccount])

    const handleButtonClick = async () => {
        setShowLoading(true)
        if(hasAccount){
            const userInfo = await signin(user.email, user.password)
            setShowLoading(false)
            if(userInfo){
                storeUserAsync(userInfo)
                navigation.navigate('TabRoute')
            }
        } else {
            const res = await signup(user.name, user.email, user.password)
            setShowLoading(false)
            if(res){
                setHasAccount(true)
            }
        }
    }
    

    return (
        <View style={styles.container} >
            <ModalLoading
                isVisible={showLoading}
                onCancel={() => setShowLoading(false)}
            />
            <View style={styles.headerContainer} >
                <Text style={styles.headerText} >
                        {
                            !hasAccount
                            ? 'Cadastrar'
                            : 'Login'
                        }
                </Text>
                <MyIcon
                    style={styles.icon}
                    icon={icons.logo}
                />
            </View>
            <View style={styles.bodyContainer} >
                {
                    !hasAccount
                    &&
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome...'
                        placeholderTextColor='#AAA'
                        cursorColor='#000'
                        value={user.name}
                        onChangeText={name => setUser(new User(name, user.email, user.password))}
                    />
                }
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu e-mail...'
                        placeholderTextColor='#AAA'
                        cursorColor='#000'
                    value={user.email}
                    onChangeText={email => setUser(new User(user.name, email, user.password))}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha...'
                    secureTextEntry={true}
                        placeholderTextColor='#AAA'
                        cursorColor='#000'
                    value={user.password}
                    onChangeText={password => setUser(new User(user.name, user.email, password))}
                />
                {
                    !hasAccount
                    &&
                    <TextInput
                        style={styles.input}
                        placeholder='Confirme sua senha...'
                        secureTextEntry={true}
                        placeholderTextColor='#AAA'
                        cursorColor='#000'
                        value={passwordConfirmation}
                        onChangeText={password => setPasswordConfirmation(password)}
                    />
                }
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: fieldsIsValid ? colors.secondaryColor : colors.disabledColor }]}
                    disabled={!fieldsIsValid}
                    onPress={handleButtonClick}
                >
                    <Text style={styles.buttonText} >
                        {
                            !hasAccount
                            ? 'Cadastrar'
                            : 'Login'
                        }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setHasAccount(!hasAccount)}
                >
                    <Text style={styles.changePageText} >
                        {
                            !hasAccount
                            ? 'Já possui conta?'
                            : 'Ainda não possui conta?'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}