// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView } from "react-native";

import { useEffect, useState } from "react";

// Importar o arquivo com os componentes CSS
import { BtnSubmitFormDash, Container, InputFormDash, LabelFormDash, Pagination, TxtRequiredFormDash, TxtSubmitFormDash } from './../../styles/custom_adm';

//importar navegação entre telas
import { useNavigation } from "@react-navigation/native";

// importar a api 
import api from '../../config/api';



// Criar e exportar a função com a tela inicial 
export default function EditUser({ route }) {

  const navigation = useNavigation();
  //console.log(route.params.UserID)
  
  //armazena as informações do usuario
  const [id, setId ] = useState('');
  const [name, setName ] = useState('');
  const [email, setEmail] = useState('');

 
  
  const userId  = route.params.UserID;
  const getUser = async() =>{ 
    await api.get(`/users/${userId}`)
    .then((response)=>{
        // console.log('====================================================================================')
        // console.log(response.data.user);
        setId(response.data.user.id) ;
        setName(response.data.user.name) ;
        setEmail(response.data.user.email);
    }).catch((err)=>{
        if(err.response) {
          Alert.alert("Ops",err.response.data.mensagem);
        } else {
          Alert.alert("Ops","Erro: Tente Novamente Mais Tarde!");
        }
    })
  }
  

  useEffect(()=>{

    getUser();


  },[])
//processar/submeter dados
const editarUsuario = async () => {
    await api.put('/users', { id, name, email });
    navigation.navigate('ViewUser',{userId:userId})
};
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

          <BtnSubmitFormDash onPress={editarUsuario}>
            <TxtSubmitFormDash>Salvar</TxtSubmitFormDash>
          </BtnSubmitFormDash>

        </Container>
    </ScrollView>
  );
};
