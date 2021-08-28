import { setBackgroundColor } from './utils/utils';
import { Route, withRouter } from 'react-router-dom';
import { appRoutes } from './constants/routes';
import useWindowSize from './hooks/use-window-size.hook';

import Particles from 'react-particles-js';
import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';
import Navigation from './components/nav-column/nav-column.component';
import Projects from './components/projects/projects.component';
import AboutMe from './components/about me/about-me.component';
import MobileLayout from './components/mobile-layout/mobile-layout.component';
import Blogs from './components/blogs/blogs.component';

import { AppWrapper, Routes, StaticColumn } from './App.styles';

function App({ location }: any) {
  const windowSize = useWindowSize();

  return (
    <AppWrapper color={setBackgroundColor(location.pathname)}>
      <Particles
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      ></Particles>
      <StaticColumn>
        <ProfileCard location={location} />
        <div className='nav-column'>
          <Navigation />
        </div>
      </StaticColumn>

      <Routes>
        {windowSize?.width && windowSize?.width > 1024 ? (
          <>
            <Route path={appRoutes.ABOUT_ME.route} exact component={AboutMe} />
            <Route path={appRoutes.PROJECTS.route} component={Projects} />
            <Route path={appRoutes.BLOGS.route} component={Blogs} />
          </>
        ) : (
          <>
            <Route
              path={appRoutes.ABOUT_ME.route}
              exact
              component={MobileLayout}
            />
          </>
        )}
      </Routes>

      <ResumeLink />
    </AppWrapper>
  );
}

export default withRouter(App);
