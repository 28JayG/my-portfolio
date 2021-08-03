import { setBackgroundColor } from './utils/utils';
import { Route, withRouter } from 'react-router-dom';

import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';
import Navigation from './components/nav-column/nav-column.component';

import { AppWrapper, Routes, StaticColumn } from './App.styles';
import { appRoutes } from './constants/routes';
import AboutMe from './components/about me/about-me.component';

function App({ location }: any) {
  return (
    <AppWrapper color={setBackgroundColor(location.pathname)}>
      <StaticColumn>
        <ProfileCard location={location} />
        <div className='nav-column'>
          <Navigation />
        </div>
      </StaticColumn>

      <Routes>
        <Route path={appRoutes.ABOUT_ME.route} exact component={AboutMe} />
      </Routes>

      <ResumeLink />
    </AppWrapper>
  );
}

export default withRouter(App);
