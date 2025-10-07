import React, { FC } from 'react';
import { Image } from '../../types/data';
import {
  BuyButton,
  Container,
  Content,
  DescriptionList,
  GalleryWrapper,
  Header,
  Price,
  Subheader,
} from './styled';
import Gallery from '../Gallery';
import ReactMarkdown from 'react-markdown';
import { Image as IoImage, Brush, Cube, Ribbon, Rocket } from 'react-ionicons';

type Props = {
  title: string;
  subtitle?: string;
  category?: string;
  price?: number;
  gallery: Image[];
};
const Product: FC<Props> = ({ title, subtitle, category, gallery, price }) => {
  return (
    <Container>
      <GalleryWrapper>
        <Gallery items={gallery} />
      </GalleryWrapper>
      <Content>
        <Header>
          {title}
          <br />
          <sub>{(category && category) || ''}</sub>
        </Header>
        <Subheader>{subtitle && <ReactMarkdown skipHtml>{subtitle}</ReactMarkdown>}</Subheader>
        <Price>
          {price && (
            <>${price.toLocaleString(undefined, { useGrouping: true, maximumFractionDigits: 2 })}</>
          )}
        </Price>
        <BuyButton
          href={`https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20buy%20"${title}${
            (category && ', ' + category) || ''
          }"`}
        >
          Buy now
        </BuyButton>
        <DescriptionList>
          <li>
            <Brush height={'14px'} color={'#bbb'} />
            <div>This is an original painting. It comes signed with finished edges.</div>
          </li>
          <li>
            <Rocket height={'14px'} color={'#bbb'} />
            <div>
              All original works purchased on my website include free international shipping.
              Original works usually ship within 1 week. Each painting is thoroughly inspected
              before shipping and sometimes requires touchups or varnishing which can take drying
              time.
            </div>
          </li>
          <li>
            <Ribbon height={'14px'} color={'#bbb'} />
            <div>Includes a custom embossed and archival certificate of authenticity.</div>
          </li>
          <li>
            <Cube height={'14px'} color={'#bbb'} />
            <div>
              Medium/smaller works are sent in tailor sized boxes. Larger works are unstretched and
              rolled unless by request.
            </div>
          </li>
          <li>
            <IoImage height={'14px'} color={'#bbb'} />
            <div>
              Framing can be provided at material cost. Please make a note at purchase if you'd like
              to discuss a custom frame.
            </div>
          </li>
        </DescriptionList>
      </Content>
    </Container>
  );
};

export default Product;
