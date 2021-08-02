import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';

import { AppWrapper } from './App.styles';

function App() {
  return (
    <AppWrapper>
      <ProfileCard></ProfileCard>
      <ResumeLink />
    </AppWrapper>
  );
}

export default App;
