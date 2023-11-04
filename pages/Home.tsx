import {useEffect, useState} from "react"
import { Button, Text } from "@rneui/themed"
import axiosConfig from "./axios"
import { Divider, ListItem } from "react-native-elements"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ScrollView, Image, View } from "react-native"
import ListItemTitle from "react-native-elements/dist/list/ListItemTitle"
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from 'expo-secure-store'


export default function Home({ navigation }) {
    const [produtos, setProdutos] = useState([])
    const [nomeUser, setNomeUser] = useState('')

    /*useEffect(() =>{
        axiosConfig.get('/products').then((response) =>{
            setProdutos(response.data.products)
        })
        .catch(() => {
            alert('Erro!')
        })
        AsyncStorage.getItem('user').then((user) =>{
            setNomeUser(user)
        })
    },[])*/

    async function sair (){
        await SecureStore.deleteItemAsync('token')
        await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
    }


    return (
        <ScrollView>
            <Text h1>Home</Text>
            <Text h1> ola,{nomeUser}</Text>
           <View>
        <Button
          title="Cadastro de Pet"
          onPress={() => navigation.navigate('Cadastro_pet')}
        />
        <Button
          title="Agendamentos"
          onPress={() => navigation.navigate('Agendamento')}
        />
        <Button
          title="Histórico"
          onPress={() => navigation.navigate('Historico')}
        />
      </View>
      <Button title='Sair' onPress={
              sair
            } />
            
        </ScrollView>
    )
}