import { Title } from './page-title.styles';

interface TitleProps {
  [x: string]: any;
}

const PageTitle: React.FC<TitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
