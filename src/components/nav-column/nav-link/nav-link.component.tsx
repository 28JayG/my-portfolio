import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { LinkRow } from './nav-link.styles';

interface Props {
  title: string;
  route: string;
  [x: string]: any;
}

const CustomNavLink: React.FC<Props> = ({ route, title, ...otherProps }) => {
  const [isHovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!isHovered);

  return (
    <NavLink
      to={route}
      exact
      onMouseOver={toggleHover}
      onMouseOut={toggleHover}
      style={{ opacity: isHovered ? 1 : 0.6 }}
      activeStyle={{ opacity: 1 }}
    >
      <LinkRow {...otherProps}>
        <div className='nl-hyphen' />
        {title}
      </LinkRow>
    </NavLink>
  );
};

export default CustomNavLink;
