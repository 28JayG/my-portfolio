import React from 'react';

import ProfileCard from './components/profile-card/profile-card.component';

import { AppWrapper } from './App.styles';
import ResumeLink from './components/resume-link/resume-link.component';

function App() {
  return (
    <AppWrapper>
      <ProfileCard></ProfileCard>
      <ResumeLink />
    </AppWrapper>
  );
}

export default App;
