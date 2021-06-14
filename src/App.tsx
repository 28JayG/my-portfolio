import ProfileCard from './components/profile-card/profile-card.component';
import ResumeLink from './components/resume-link/resume-link.component';
import Folder from './components/folder/folder.component';

import { AppWrapper } from './App.styles';
import { appColors } from './constants/colors';

function App() {
  return (
    <AppWrapper>
      <ProfileCard></ProfileCard>
      <ResumeLink />
      <Folder index={0} baseColor={appColors.orange} >aaa</Folder>
      <Folder index={1} baseColor={appColors.darkYellow} >aaa</Folder>
      <Folder index={2} baseColor={appColors.lightYellow} >aaa</Folder>
    </AppWrapper>
  );
}

export default App;
