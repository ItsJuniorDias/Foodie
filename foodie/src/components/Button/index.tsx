import React from 'react';
import { ButtonProps, View, ActivityIndicator } from 'react-native';

import { ButtonRect, TextButton } from './styles';

import theme from '../../global/styles/theme';

interface Props extends ButtonProps {
  title: string;
  loadButton: boolean;
}

const Button = ({ title, loadButton, ...rest }: Props) => {
  return (
   <ButtonRect {...rest}>
     <View accessible accessibilityRole="button">
       {loadButton ? 
        <ActivityIndicator size="large" color={theme.colors.background_header} /> 
        :  <TextButton>{title}</TextButton>}
     </View>
   </ButtonRect>
  );
}

export default Button;