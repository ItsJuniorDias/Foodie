import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: ${RFValue(220)}px;
  height: ${RFValue(270)}px;
  background-color: ${({ theme }) => theme.colors.background_header};

  margin-top: ${RFValue(82)}px;
  margin-bottom: ${RFValue(32)}px;
  border-radius: ${RFValue(30)}px;

  margin-right: ${RFValue(34)}px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContentImage = styled.View`
  margin-top: ${RFValue(-44)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(24)}px;
  text-align: center;
  opacity: 0.9;
`;

export const TitleContent = styled.View`
  width: 60%;
  margin-top: ${RFValue(-60)}px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-style: normal;
  font-weight: bold;
  font-size: ${RFValue(17)}px;
  line-height: 20px;
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${RFValue(15)}px;
`;
