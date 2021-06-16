import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';

import { AppWrapper } from './App.styles';
import AboutMe from './components/about-me/about-me.component';
import Blogs from './components/blogs/blogs.component';

function App() {
  return (
    <AppWrapper>
      <ProfileCard></ProfileCard>
      <ResumeLink />
      {/* profile tabs */}
      <AboutMe />
      <Blogs />
    </AppWrapper>
  );
}

export default App;
