import React from 'react';
import { ButtonProps, View } from 'react-native';

import { ButtonRect, TextButton } from './styles';

interface Props extends ButtonProps {
  title: string;
}

const Button = ({ title, ...rest }: Props) => {
  return (
   <ButtonRect {...rest}>
     <View accessible accessibilityRole="button">
        <TextButton>{title}</TextButton>
     </View>
   </ButtonRect>
  );
}

export default Button;