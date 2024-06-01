import React ,{ useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';


const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#ffffff'
const transparentColor='#6C7A89'

const CustomizeScreen = ({ navigation }) => {

    var [name, setEmail] = useState('');
    var [age, setPassword] = useState('');
    var [Nation, setPassword] = useState('');
    var [Job, setPassword] = useState('');
    var [hobies, setPassword] = useState('');

    const handleProfile = () => {
        
    };
    return (
        <View style={styles.container}>
            <Text>This is Customize Page!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:backgroundColor,
        flex:1,
        alignItems:'center',
    },
});

export default CustomizeScreen;