import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native';


const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#000'
const transparentColor='#6C7A89'
const placeholderColor='#636363'

const CustomizeScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [nation, setNation] = useState('');
    const [location, setLocation] = useState('');
    const [job, setJob] = useState('');
    const [hobies, setHobies] = useState('');

    const handleProfile = () => {
        
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image alt='Your Profile Picture'source={require('../assets/profilePicture.png')} style={styles.profilePicture} />
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Full Name'
                    placeholderTextColor={placeholderColor}
                />

                <Text style={styles.label}>Age</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAge}
                    value={age}
                />

                <Text style={styles.label}>Nation</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNation}
                    value={nation}
                />

                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setLocation}
                    value={location}
                    
                />

                <Text style={styles.label}>Job</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setJob}
                    value={job}
                    
                />

                <Text style={styles.label}>Hobies</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHobies}
                    value={hobies}
                    maxLength={28}
                    placeholder='Max 28 Characters'
                    placeholderTextColor={placeholderColor}
                />

                <TouchableOpacity title="Save to Firebase" onPress={handleProfile} style={styles.button}> 
                    <Text style={styles.buttonText}>Save</Text> 
                </TouchableOpacity>

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
    label:{
        fontWeight:'bold',
        fontSize:16,
        alignSelf:'flex-start',

    },
    profilePicture:{
        marginTop:64,
        height:250,
        width:250,
        borderWidth:2,
        borderColor:buttonColor,
        borderRadius:150,
        
    },
    button:{
        borderColor:transparentColor,
        backgroundColor:buttonColor,

        paddingVertical:8,
        paddingHorizontal:16,
        marginVertical:8,
        marginRight:4,
        width:256,
        height:40,

        borderWidth:2,
        borderRadius:32,
        color:textColor,
    },
    buttonText:{
        alignSelf:'center',
        color:textColor,
        fontSize:16,
        fontWeight:'bold',
    },
});

export default CustomizeScreen;