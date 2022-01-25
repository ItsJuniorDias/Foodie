import React from 'react';
import { Image } from 'react-native';

import { 
  Container,
  Content,
  ContentImage,
  Title,
  TitleContent,
  Price
} from './styles';

interface Props {
  id: number;
  image_url: string;
  title: string;
  price: string;
}

const CardProduct = ({ 
  id, 
  image_url,
  price,
  title 
}: Props) => {
  return(
    <Container > 
      <Content>
        <ContentImage>
          <Image style={{ width: 245, height: 245 }} source={{ uri: `${image_url}`}} />
        </ContentImage>

       <TitleContent>
         <Title>
            {title}
          </Title>
        </TitleContent> 

        <Price>
          R$ {price}
        </Price>
      </Content>
    </Container>
  );
}

export default CardProduct;