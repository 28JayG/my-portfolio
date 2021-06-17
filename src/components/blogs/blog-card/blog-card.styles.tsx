import styled from 'styled-components';

type blogCardStyle = {
  imageUrl?: string;
};

export const BlogCardContainer = styled.div<blogCardStyle>`
  display: block;
  width: 300px;
  height: calc(300px * 9 / 18);
  margin: 0 auto;
  background-image: url(${({ imageUrl }) => (imageUrl ?? '')});
`;
