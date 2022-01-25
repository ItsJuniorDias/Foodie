
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonRect = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 100%;
  height: ${RFValue(70)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(30)}px;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(32)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text_button};
`;