import React, { useState, useEffect } from 'react';
import { 
   Image, 
   StatusBar, 
   TouchableOpacity, 
   useWindowDimensions,
   View,
   ScrollView, 
   FlatList
  } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { 
  Container, 
  Header,
  ContentHeader,
  Title,
  ContentTitle,
  ContentTabView,
  ContentFood
} from './styles';

import theme from '../../global/styles/theme';

import shopping_cart from '../../assets/images/shopping-cart.png';
import vector from '../../assets/images/vector.png';

import InputSearch from '../../components/InputSearch';
import CardProduct from '../../components/CardProduct';
import { SafeAreaView } from 'react-native-safe-area-context';

import axios from '../../services/api';

const Home = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get('/products');
       
      console.log(response.data);
      setData(response.data)
    }

    loadProducts()
  },[]);

  const renderItem = ({ item }) => (
    <CardProduct
      id={item.id}
      image_url={item.img_url}
      title={item.title}
      price={item.price}
    />
  )

  const FirstRoute = () => (
   <ContentFood>
       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
  
   </ContentFood>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Comidas' },
    { key: 'second', title: 'Favoritos' },
  ]);

  const renderTabBar = props => {
    const { colors, fonts } = theme;

    return (
    <TabBar
      {...props}
      activeColor={colors.primary}
    	inactiveColor={colors.secondary_text}
      indicatorStyle={{ 
        backgroundColor: colors.primary,
      }}
     labelStyle={{
      fontSize: 18,
      fontFamily: fonts.medium,
      textTransform: 'capitalize',
     }}
      style={{ 
        backgroundColor: colors.background, 
        color: colors.primary,
      
      }}
    />
  )};

  return (
    <>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={theme.colors.background}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>
            <ContentHeader>
              <TouchableOpacity>
                <Image source={vector} />
              </TouchableOpacity>
              
              <TouchableOpacity>
                <Image source={shopping_cart} />
              </TouchableOpacity>
            </ContentHeader>

            <ContentTitle>
              <Title>
                Comida 
              </Title>
              <Title>
                deliciosa para você
              </Title>
            </ContentTitle>
            
            <InputSearch
                title="Buscar por nome"
                name="filter"
                callBackParent={() => {}}
                placeholderTextColor={theme.colors.text_opacity}
              />
          </Header>

       
          
          <ContentTabView>
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
              />
          </ContentTabView>


           {!index ? FirstRoute() : SecondRoute()}
        </ScrollView>
      </Container>
    </>
  );
}

export default Home;