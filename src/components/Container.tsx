import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  max-width: ${rem(1236)};
  margin: 0 auto;
  padding: 0 ${rem(30)};
  box-sizing: content-box;
`;

export default Container;
