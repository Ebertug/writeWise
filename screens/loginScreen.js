import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Text,Image,Platform} from 'react-native';

const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#000'
const transparentColor='#6C7A89'
const placeholderColor='#636363'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
    };
    const handleProfile = () => {
        navigation.navigate('Profile');
    };

    return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/writewise.png')} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Email</Text>
            <TextInput
            placeholder='something@gmail.com'
            placeholderTextColor={placeholderColor}
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
            placeholder='*******d'
            placeholderTextColor={placeholderColor}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity title="Sign In" onPress={handleProfile} style={styles.button}> 
                <Text style={styles.buttonText}> Sign In</Text> 
            </TouchableOpacity>
            <TouchableOpacity title="Sign Up" onPress={handleProfile} style={styles.button}> 
                <Text style={styles.buttonText}> Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity title="Google" onPress={handleProfile} style={{marginTop:8,width:40,height:40}} >
                <Image source={require('../assets/google2.png')} style={{height:40,width:40,resizeMode: 'contain'}}  />
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:backgroundColor,
        flex:1,
    },
    logoContainer:{
        alignSelf:'center',
        marginTop:64,
    },
    logo:{
        width:64,
        height:64,
    },
    inputContainer:{
        marginTop:192,
        backgroundColor:backgroundColor,
        color:textColor,
        alignItems:'center',
    },
    input:{
        borderColor:transparentColor,
        backgroundColor:buttonColor,
        color:textColor,
        paddingVertical:8,
        paddingHorizontal:16,
        width:256,
        height:40,

        borderWidth:2,
        borderRadius:32,
        fontSize:16,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor:backgroundColor,
    },
    button:{
        borderColor:transparentColor,
        backgroundColor:buttonColor,

        paddingVertical:8,
        paddingHorizontal:16,
        marginVertical:8,
        marginRight:4,
        width:102,
        height:40,

        borderWidth:2,
        borderRadius:32,
        color:textColor,
    },
    buttonText:{
        alignSelf:'center',
        color:textColor,
        fontSize:16,
    },
    text:{
        alignSelf:'flex-start',
        marginLeft: Platform.OS === 'web' ? 830 : 64,
        color:textColor,
        fontSize:16,
    }
});

export default LoginScreen;
