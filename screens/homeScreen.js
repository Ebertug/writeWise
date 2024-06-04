import React, { useState } from 'react';
import { View, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#000'
const transparentColor='#6C7A89'
const HomeScreen = ({ navigation }) => {
    
    const handleProfile = () => {
        navigation.navigate('Profile');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleProfile} style={styles.profileButton}>
                <Image source={require('../assets/profilePicture.png')} style={styles.profilePicture} />
            </TouchableOpacity>
            <Text style={styles.text}>Recent Posts</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:backgroundColor,
        flex:1,
        alignItems:'center',
    },
    logoContainer:{
        alignSelf:'center',
        marginTop:40,
    },
    logo:{
        width:64,
        height:64,
    },
    profileButton:{
        alignSelf: 'flex-end',
        width:64,
        height:64,
        borderRadius:32,

        marginRight:16,
        marginTop:40,
    },
    profilePicture:{
        borderColor:buttonColor,
        width:64,
        height:64,
        borderRadius:32,
        borderWidth:2,
    },
    text:{
        alignSelf:'flex-start',
        marginLeft:16,
        fontSize:16,
        color:textColor,
        fontWeight:'bold',
    },
    
    
});

export default HomeScreen;