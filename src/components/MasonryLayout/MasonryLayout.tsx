import React, { FC, PropsWithChildren } from 'react';
import Masonry from 'react-responsive-masonry';
import { StyledResponsiveMasonry } from './styled';

const MasonryLayout: FC<PropsWithChildren> = ({ children }) => (
  <StyledResponsiveMasonry columnsCountBreakPoints={{ 353: 1, 767: 2, 900: 3 }}>
    <Masonry gutter={'3rem'}>{children}</Masonry>
  </StyledResponsiveMasonry>
);

export default MasonryLayout;
