import React from 'react';
import { View,Text,StyleSheet,Image, Button,} from 'react-native';


const buttonColor='#FFD700'
const backgroundColor='#BDC3C7'
const textColor='#000'
const transparentColor='#6C7A89'

const ProfileScreen = ({ navigation }) => {
    const handleCustomize = () => {
        navigation.navigate('Customize');
    };
    return (
        
        <View style={styles.container}>
            <Image alt='Your Profile Picture'source={require('../assets/profilePicture.png')} style={styles.profilePicture} />
            <Button
                title="Customize Profile"
                onPress={handleCustomize}
            />
            <View style={styles.profileContainer}>

                <Text style={styles.label}>Name</Text>
                <Text style={styles.textBackground}>Eyüp Yenikomşu</Text>

                <Text style={styles.label}>Age</Text>
                <Text style={styles.textBackground}>22</Text>

                <Text style={styles.label}>Nation</Text>
                <Text style={styles.textBackground}>Turkish</Text>
                
                <Text style={styles.label}>Location</Text>
                <Text style={styles.textBackground}>Turkey</Text>

                <Text style={styles.label}>Job</Text>
                <Text style={styles.textBackground} >Software Engineer</Text>

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
    profileContainer:{
        backgroundColor:backgroundColor,
        color:textColor,
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

        paddingVertical:8,
        paddingHorizontal:16,
        width:256,
        height:40,
            
        borderWidth:2,
        borderRadius:20,
        fontSize:16,

        borderColor:transparentColor,
        backgroundColor:buttonColor,
        overflow:"hidden" // taşan kısımları ignoreluyor
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

export default ProfileScreen;