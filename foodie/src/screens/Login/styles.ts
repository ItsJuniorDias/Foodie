import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background}; 
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(57)}px;
  background-color: ${({ theme }) => theme.colors.background_header};
  border-bottom-left-radius: ${RFValue(30)}px;
  border-bottom-right-radius: ${RFValue(30)}px;
  elevation: 1;
`;

export const LogoContent = styled.View`
   align-items: center;
   justify-content: flex-end;
   
   flex: 5.5;
`;

export const Logo = styled.Image`
   margin-bottom: ${RFValue(8)}px;
`;

export const ContentTab = styled.View`
  flex: 1;
  margin-top: ${RFValue(54)}px;
  padding: 0 ${RFValue(50)}px;
`;

export const TextTab = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
  line-height: 21px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(64)}px;
  padding: 0 ${RFValue(50)}px;
`;

export const Touchable = styled.TouchableOpacity`
  
`;

export const PasswordForget = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.primary};
`;





