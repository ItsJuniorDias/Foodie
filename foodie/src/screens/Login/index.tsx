import React, { useState } from 'react';
import { 
  View, 
  useWindowDimensions, 
  ScrollView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert,
  StatusBar
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { TabBar,TabView, SceneMap } from 'react-native-tab-view';
import { TextInput } from 'react-native-paper';

import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import logo from '../../assets/images/logo.png';
import theme from '../../global/styles/theme';

import axios from '../../services/api';

import { 
  Container, 
  Header,
  LogoContent, 
  Logo,
  ContentTab,
  TextTab,
  Content,
  PasswordForget,
  Touchable,
} from './styles';

interface FormData {
  password: string;
  email: string;
}

const shema = Yup.object().shape({
  email: Yup.string().required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória')
});

const Login = ({ navigation }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Login' },
    { key: 'second', title: 'Sign-up' },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(shema)
  });


  const handleLogin = async (form: FormData) => {
   const { email, password } = form;

   if(!email || password === '')
   return Alert.alert('Alerta','Preencha seu email e senha');

    const data = {
      email,
      password
    }

    try { 
      const response = await axios.post('/login', data);
      console.log(response);

      navigation.navigate('Home');
      console.log(data);
    } catch(e) {
      Alert.alert('Erro de autenticação', 'Email ou senha inválidos');
    }
    

  
  }

  const handleRegister = async (form) => {

    if(!name || !email || !password || confirmPassword === '')
    return Alert.alert('Alerta','Preencha todos os campos');

    if(password !== confirmPassword )
    return Alert.alert('Alerta','As senhas devem ser iguais');

    const data = {
      email,
      password, 
      name,
      confirmPassword
    }
    
    const response = await axios.post('/users', data);
    console.log(response, 'Response');

    navigation.navigate('Home');
   
    console.log(data);
   }
  
  const FirstRoute = () => (
    <Content> 
      <InputForm
        mode="flat"
        name='email'
        control={control}
        activeUnderlineColor={theme.colors.primary}
        placeholderTextColor={theme.colors.text}
        placeholder='Email' 
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        right={<TextInput.Icon name="email" />} 
        error={errors.email && errors.email.message}
      />

      <InputForm 
        mode="flat"
        name='password'
        control={control}
        activeUnderlineColor={theme.colors.primary}
        placeholderTextColor={theme.colors.text}
        placeholder='Senha'
        right={<TextInput.Icon name="lock" />} 
        secureTextEntry
        autoCapitalize='none'
        error={errors.password && errors.password.message}
      />
      
      <Touchable activeOpacity={0.6}>
        <PasswordForget>Esqueceu a senha?</PasswordForget>
      </Touchable>
 
      <Button onPress={handleSubmit(handleLogin)} title="Login"/>
    </Content>
  );
  
  const SecondRoute = () => (
    <Content> 
      <Input
        mode="flat"
        onChangeText={(text) => setName(text)}
        value={name}
        activeUnderlineColor={theme.colors.primary}
        placeholderTextColor={theme.colors.text}
        placeholder='Nome Completo' 
        right={<TextInput.Icon name="account" />} 
        returnKeyType="next"
      />

      <Input
        mode="flat"
        onChangeText={(text) => setEmail(text)}
        value={email}
        activeUnderlineColor={theme.colors.primary}
        placeholderTextColor={theme.colors.text}
        placeholder='Email' 
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        right={<TextInput.Icon name="email" />} 
        returnKeyType="next"
      />
      <Input
        mode="flat"
        onChangeText={(text) => setPassword(text)}
        value={password}
        activeUnderlineColor={theme.colors.primary}
        placeholderTextColor={theme.colors.text}
        placeholder='Senha'
        right={<TextInput.Icon name="lock" />} 
        secureTextEntry
      />

      <Input
        mode="flat"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        activeUnderlineColor={theme.colors.primary}
        placeholderTextColor={theme.colors.text}
        placeholder='Confirmar senha'
        right={<TextInput.Icon name="lock" />} 
        secureTextEntry
      />

 
        <Button onPress={handleRegister} title="Sign-up"/>
    </Content>
  );

  const renderTabBar = props => {
    const { colors } = theme;

    return (
    <TabBar
      {...props}
      renderLabel={({route, color}) => (
        <TextTab >
          {route.title}
        </TextTab>
      )}
   
      indicatorStyle={{ backgroundColor: colors.primary }}
      indicatorContainerStyle={{ backgroundColor: colors.background_header, }}
      style={{ 
        backgroundColor: colors.background_header, 
        color: colors.text, 
 
      }}
      activeColor={colors.text}
      inactiveColor={colors.text}
    />
  )};

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={theme.colors.background_header}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container> 
          <ScrollView showsVerticalScrollIndicator={false}>
          <Header> 
            <LogoContent>
              <Logo source={logo} />

            </LogoContent>

            <ContentTab> 
              <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: layout.width }}
                  renderTabBar={renderTabBar}
                />
            </ContentTab> 
          </Header>
          
          {!index ? FirstRoute() : SecondRoute()}

          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}

export default Login;