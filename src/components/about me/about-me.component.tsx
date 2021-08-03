import PageTitle from '../common/page-title/page-title.component';
import { AboutContainer, Paragraph } from './about-me.styles';
import SkillSet from './skill-set/skill-set.component';

const AboutMe = () => {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        ante velit, eu eleifend sapien gravida sit amet. Nunc ex ligula,
        convallis scelerisque dui ut, tincidunt vehicula est. Pellentesque id
        ipsum id magna pulvinar bibendum. Nullam nisl nisl, malesuada sed semper
        at, auctor vitae est. Mauris iaculis luctus egestas. Proin nulla ex,
        rutrum nec hendrerit molestie, venenatis faucibus nunc
      </Paragraph>
      <SkillSet />
      <SkillSet />
      <SkillSet />
    </AboutContainer>
  );
};

export default AboutMe;
