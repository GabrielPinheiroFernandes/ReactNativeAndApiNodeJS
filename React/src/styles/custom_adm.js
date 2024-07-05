import styled from "styled-components";
//ListUser
export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: #742fc2;
    padding: 8px;
`;

export const TitleList = styled.Text`
    color: #f5f5f5;
    width:150px;
    font-size: 30px;
    text-align: center;
    padding: 25px 15px 10px 15px;
`;
export const BtnAddAction = styled.TouchableOpacity`
  background-color: #f57c00;  /* Cor de fundo diferente */
  width: 150px;
  height: 50px;  /* Altura ligeiramente maior */
  align-items: center;
  justify-content: center;
  border-radius: 8px;  /* Borda ligeiramente mais arredondada */
  margin-top: 10px;  /* Margem superior para espaçamento */
  shadow-color: #000;  /* Sombra para um efeito de elevação */
  shadow-offset: 0px 2px;  /* Correção aqui */
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;  /* Elevação para Android */
`;

export const BtnAddText = styled.Text`
  color: #ffffff;  /* Texto em branco */
  font-size: 18px;  /* Tamanho da fonte */
  font-weight: bold;  /* Negrito */
`;

export const HeadersCadUsu = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const List = styled.View`
    width: 100%;
`;

export const RowData = styled.View`
    background-color: #f5f5f5;
    padding: 10px;
    margin: 5px 0;
    border-radius: 6px;
    flex-direction: row;
    justify-content: flex-start;
`;

export const InfoData = styled.Text`
    color: #111;
    flex: 1;
    flex-direction: column;
`;

export const ValueData = styled.Text`
    font-size: 16px;
    flex: 0;
`;

export const BtnView = styled.Text`
    justify-content: flex-end;
`;
//Pagination
export const Pagination = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PaginationText = styled.Text`
    background-color: #f5f5f5;
    font-size: 16px;
    padding: 12px;
    margin: 3px;
    border-radius: 6px;
`;

export const PaginationTextActive = styled.Text`
    background-color: #c5c5c5;
    font-size: 16px;
    padding: 12px;
    margin: 3px;
    border-radius: 6px;
`;
//View User
export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-color: #c0c0c0;
    border-bottom-width: 1px;
    padding: 15px 0;
`;

export const TitleViewContent = styled.Text`
    color: #c0c0c0;
    font-size: 18px;
    margin-right: 10px;
`;

export const ViewContent = styled.Text`
    color: #f5f5f5;
    font-size: 15px;
`;

export const BtnActionEdit = styled.TouchableOpacity`
    margin-top: 15px;
    background-color: #5004a7;
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid #f5f5f5; /* Adicionei a propriedade 'border' corretamente */
`;
export const BtnActionDel = styled.TouchableOpacity`
    margin-top: 15px;
    background-color: #f00;
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid #f5f5f5; /* Adicionei a propriedade 'border' corretamente */
`;

export const TxtBtnAction = styled.Text`
    color: #fff;
    font-size: 19px;
`;

//Formulario

export const LabelFormDash = styled.Text`
  color: #111;
  font-size: 18px;
`;

export const InputFormDash = styled.TextInput`
  background-color: #fff;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  color: #222;
  font-size: 18px;
  border-radius: 6px;
  border-color: #1f51fe;
  border-width: 1px;
`;

export const TxtRequiredFormDash = styled.Text`
  padding-bottom: 5px;
  color: #111;
  font-size: 12px;
`;
export const BtnSubmitFormDash = styled.TouchableOpacity`
  background-color: #1f51fe;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const TxtSubmitFormDash = styled.Text`
  color: #fff;
  font-size: 19px;
`;

