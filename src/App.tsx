import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';

import { AppWrapper } from './App.styles';
import AboutMe from './components/about-me/about-me.component';

function App() {
  return (
    <AppWrapper>
      <ProfileCard></ProfileCard>
      <ResumeLink />
      <AboutMe />
    </AppWrapper>
  );
}

export default App;
