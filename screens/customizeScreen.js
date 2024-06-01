import React ,{ useState } from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';


const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#ffffff'
const transparentColor='#6C7A89'

const CustomizeScreen = ({ navigation }) => {

    var [name, setName] = useState('');
    var [age, setAge] = useState('');
    var [nation, setPassword] = useState('');
    var [Job, setPassword] = useState('');
    var [hobies, setPassword] = useState('');

    const handleProfile = () => {
        
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder='something@gmail.com'
                placeholderTextColor={placeholderColor}
                style={styles.input}
                onChangeText={setName}
                value={name}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:backgroundColor,
        flex:1,
        alignItems:'center',
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
});

export default CustomizeScreen;