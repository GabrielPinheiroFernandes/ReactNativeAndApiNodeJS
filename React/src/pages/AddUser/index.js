// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView } from "react-native";

import { useEffect, useState } from "react";

// Importar o arquivo com os componentes CSS
import {  BtnSubmitFormDash, Container, InputFormDash, LabelFormDash, TxtRequiredFormDash, TxtSubmitFormDash } from '../../styles/custom_adm';

//importar navegação entre telas
import { useNavigation } from "@react-navigation/native";

// importar a api 
import api from '../../config/api';



// Criar e exportar a função com a tela inicial 
export default function AddUser() {
  const navigation = useNavigation();

  const [name, setName ] = useState('');
  const [email, setEmail] = useState('');

  const AddUsuario = async() =>{ 
    await api.post(`/users/`, {name,email})
    .then((response)=>{
        Alert.alert('Usuario Cadastrado com sucesso');
        navigation.navigate('ListUser');

    }).catch((err)=>{
        if(err.response) {
          Alert.alert("Ops",err.response.data.mensagem);
        } else {
          Alert.alert("Ops","Erro: Tente Novamente Mais Tarde!");
        }
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <LabelFormDash>*Nome</LabelFormDash>
          <InputFormDash
          placeholder='Nome Completo'
          autoCorrect={false}
          value={name}
          onChangeText={text => setName(text)}
          />
          
          <LabelFormDash>*Email</LabelFormDash>
          <InputFormDash
          placeholder='Email '
          autoCorrect={false}
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={text => setEmail(text)}
          />
          <TxtRequiredFormDash>*Campos Obrigatórios</TxtRequiredFormDash>  

          <BtnSubmitFormDash onPress={AddUsuario}
          >
            <TxtSubmitFormDash>Salvar</TxtSubmitFormDash>
          </BtnSubmitFormDash>
        </Container>
    </ScrollView>
  );
};
