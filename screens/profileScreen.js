import React from 'react';
import { View,Text,StyleSheet,Image,Platform, TouchableOpacity} from 'react-native';


const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#ffffff'
const transparentColor='#6C7A89'

const ProfileScreen = ({ navigation }) => {
    const handleCustomize = () => {
        navigation.navigate('Customize');
    };
    return (
        <View style={styles.container}>
            <Image alt='Your Profile Picture'source={require('../assets/profilePicture.png')} style={styles.profilePicture} />
            <TouchableOpacity title="CustomizeProfile" onPress={handleCustomize}> <Text style={styles.customizeProfile}>Customize Profile</Text> </TouchableOpacity>
            <Text style={styles.label}>Name</Text>
            <View style={styles.textBackground}><Text style={styles.text}>Banu Güneş</Text></View>
            <Text style={styles.label}>Age</Text>
            <View style={styles.textBackground}><Text style={styles.text}>22</Text></View>
            <Text style={styles.label}>Nation</Text>
            <View style={styles.textBackground}><Text style={styles.text}>Turkey</Text></View>
            <Text style={styles.label}>Job</Text>
            <View style={styles.textBackground}><Text style={styles.text}>ELT</Text></View>
            <Text style={styles.label}>Hobies</Text>
            <View style={styles.textBackground}><Text style={styles.text}>Music, Travel, Movies</Text></View>            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:backgroundColor,
        flex:1,
        alignItems:'center',
    },
    text:{
        paddingVertical:2,
        paddingHorizontal:8,
        fontSize:16,
        color:'#000',
        
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
        width:256,
        height:32,
        borderColor:transparentColor,
        borderWidth:2,
        borderRadius:16,
        backgroundColor:buttonColor,
    },
    label:{
        fontWeight:'bold',
        fontSize:16,
        alignSelf:'flex-start',
        marginLeft: Platform.OS === 'web' ? 830 : 64,
    },
    customizeProfile:{
        color:'#0049ff',
        fontSize:16,
        
    },
});

export default ProfileScreen;