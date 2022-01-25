import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 32px;
`;

export const Header = styled.View`
  margin-top: 32px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-style: normal;
  font-weight: bold;
  font-size:${RFValue(34)}px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.text};
  
`;

export const ContentTitle = styled.View`
  margin-top: ${RFValue(43)}px;
  margin-bottom: ${(RFValue(32))}px;
`;

export const ContentTabView = styled.View`
  flex: 1;
  margin-top: ${RFValue(46)}px;
`;

export const TextTab = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
  line-height: 21px;

  color: ${({ theme }) => theme.colors.secondary_text};
`;

export const ContentFood = styled.SafeAreaView`
  flex: 1;
`;
