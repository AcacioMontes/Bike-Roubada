import React from "react";
import {View, Text} from 'react-native';

export default function Sobre({route}){
    return(
        <View>
            <Text> Nome:{route.params?.nome} </Text>
            <Text>Cpf:{route.params.cpf}</Text>
        </View>
    )
}