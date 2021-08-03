import { appRoutes, Route } from '../../constants/routes';

import CustomNavLink from './nav-link/nav-link.component';

import { NavContainer } from './nav-column.styles';

const Navigation = () => {
  return (
    <NavContainer>
      {Object.values(appRoutes).map(({ title, route }: Route) => (
        <CustomNavLink active key={title} route={route} title={title} />
      ))}
    </NavContainer>
  );
};

export default Navigation;
