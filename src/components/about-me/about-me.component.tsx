import { appColors } from '../../constants/colors';

import FolderTitle from '../common/folder-title/folder-title.component';
import Folder from '../folder/folder.component';

import { Description, ParagraphWrapper, Grid } from './about-me.styles';

const AboutMe = () => {
  return (
    <Folder index={0} baseColor={appColors.orange} title='About Me'>
      <Grid>
        <div>
          <FolderTitle fill='white'>About</FolderTitle>
          <FolderTitle stroke='white'>Me</FolderTitle>
        </div>
        <ParagraphWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia ante velit, eu eleifend sapien gravida sit amet. Nunc ex
            ligula, convallis scelerisque dui ut, tincidunt vehicula est.
            Pellentesque id ipsum id magna pulvinar bibendum. Nullam nisl nisl,
            malesuada sed semper at, auctor vitae est. Mauris iaculis luctus
            egestas. Proin nulla ex, rutrum nec hendrerit molestie, venenatis
            faucibus nunc
          </Description>
        </ParagraphWrapper>
      </Grid>
    </Folder>
  );
};

export default AboutMe;
