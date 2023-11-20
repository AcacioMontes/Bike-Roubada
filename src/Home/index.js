import React from "react";
import {View, Text, Button, KeyboardAvoidingView, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({navigation}){
    return(
        <KeyboardAvoidingView style={styles.background}>
                <View style={styles.areaView}>
                
                    
                    <Text style={styles.nomeDesign}> Bike Roubada </Text>
                </View>
                <View>
                    
                    <TextInput 
                    style={styles.input}
                    placeholder="Insira seu usuário"
                    autoCorrect={false}
                    secureTextEntry={true}

                    onChangeText={() => {}}
                    />
                     <TextInput 
                    style={styles.input}

                    placeholder="Insira sua senha"
                    autoCorrect={false}
                    secureTextEntry={true}
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
                    title="Sobre"
                    onPress={ () => navigation.navigate("Sobre", {nome: "José"})}
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
        backgroundColor: '#ffffff'
        
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
       borderWidth: 1,
       borderColor: '#EEEEEE',
       alignItems: "center",
       justifyContent: "center"
 
    },
    btnSubmit: {
        backgroundColor: '#ff0000',
        width: '90%',
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
    },
    submitText: {
        color: "#FFF",
        
        fontSize: 18,
    },
    btnRegister: {
       marginTop: 10,
    },
    registerText: {
        color: '#222',
        textAlign: 'center',
        justifyContent: 'center'

    },
    nomeDesign: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight:150,
    
        color: '#ff0000'

    },
    

    
})   
    