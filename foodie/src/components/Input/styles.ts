import styled from 'styled-components/native';

import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  font-size: ${RFValue(17)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  background-color: ${({ theme }) => theme.colors.background_header};
  margin-bottom: ${RFValue(16)}px;
`;
