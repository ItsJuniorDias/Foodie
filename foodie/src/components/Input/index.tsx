import React from 'react';
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

import { Container } from './styles';

type Props = TextInputProps;

const Input = ({...rest}: Props) => {
  return <Container {...rest} />;
}

export default Input;