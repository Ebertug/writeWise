import React, { useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#000'
const transparentColor='#6C7A89'
const HomeScreen = ({ navigation }) => {
    const handleCustomize = () => {
        navigation.navigate('Customize');
    };

    return (
        <View style={styles.container}>
            <Image alt='Your Profile Picture'source={require('../assets/profilePicture.png')} style={styles.profilePicture} />
            <TouchableOpacity title="CustomizeProfile" onPress={handleCustomize}> <Text style={styles.customizeProfile}>Customize Profile</Text> </TouchableOpacity>
            <View style={styles.container}>

                <Text style={styles.label}>Name</Text>
                <Text style={styles.textBackground}>Eyüp Yenikomşu</Text>

                <Text style={styles.label}>Age</Text>
                <Text style={styles.textBackground}>22</Text>

                <Text style={styles.label}>Nation</Text>
                <Text style={styles.textBackground}>Turkish</Text>
                
                <Text style={styles.label}>Location</Text>
                <Text style={styles.textBackground}>Turkey</Text>

                <Text style={styles.label}>Job</Text>
                <Text style={styles.textBackground}>Software Engineer</Text>

                <Text style={styles.label}>Hobies</Text>
                <Text style={styles.textBackground}>Basketball, Music, Movie</Text>


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
    profilePicture:{
        marginTop:64,
        height:250,
        width:250,
        borderWidth:2,
        borderColor:buttonColor,
        borderRadius:150,
    },
    textBackground:{
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
    customizeProfile:{
        color:'#0049ff',
        fontSize:16,  
    },
    
});

export default HomeScreen;