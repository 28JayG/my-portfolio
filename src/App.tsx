import { setBackgroundColor } from './utils/utils';
import { Route, withRouter } from 'react-router-dom';

import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';
import Navigation from './components/nav-column/nav-column.component';
import Projects from './components/projects/projects.component';
import AboutMe from './components/about me/about-me.component';

import { AppWrapper, Routes, StaticColumn } from './App.styles';
import { appRoutes } from './constants/routes';

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
        <Route path={appRoutes.PROJECTS.route} component={Projects} />
      </Routes>

      <ResumeLink />
    </AppWrapper>
  );
}

export default withRouter(App);
