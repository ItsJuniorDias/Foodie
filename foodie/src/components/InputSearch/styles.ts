import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.input_border};
  width: 100%;
  height: ${RFValue(60)}px;
  border-radius: 25px;
  margin-top: -8px;
  align-items: center;
  flex-direction: row;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.input_border};
`;

export const ContentInput = styled.View`
  width: 90%;
`;

export const Input = styled.TextInput`
  margin-left: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(17)}px;
`;