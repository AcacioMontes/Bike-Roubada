import React from "react";
import {View, Text, Button, KeyboardAvoidingView, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({navigation}){
    return(
        <KeyboardAvoidingView style={styles.background}>
                <View>
                    <Image 
                    source={require('./src/assets/images/bicicleta.png')}/>
                    
                </View>
                <View style={styles.container}>
                    
                    <TextInput 
                    style={styles.input}
                    placeholder="Usuário"
                    autoCorrect={false}
                    onChangeText={() => {}}
                    />
                     <TextInput 
                    style={styles.input}

                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => {}}
                    />
                    <TouchableOpacity 
                    style={styles.btnSubmit}
                    title="Main"
                    onPress={ () => navigation.navigate("Main")}>
                        <Text 
                        style={styles.submitText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.btnRegister}
                    >
                        <Text style={styles.registerText}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                    
                    

                </View>
        </KeyboardAvoidingView>
    )
}
export default Home; 
const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor: '#191919'
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center', 
        width: '90%',
        paddingBottom: 50,
    },
    input: {
       backgroundColor: '#fff',
       width: '90%',
       marginBottom: 15,
       color: '#222',
       fontSize: 17,
       borderRadius: 7,
       padding: 10,
    },
    btnSubmit: {
        backgroundColor: '#348EAC',
        width: '90',
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
    },
    submitText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
    },
    btnRegister: {
       marginTop: 10,
    },
    registerText: {
        color: '#fff'
    }
    
})   
    