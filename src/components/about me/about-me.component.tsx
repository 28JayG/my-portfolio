import { useState } from 'react';
import { useEffect } from 'react';

import { SkillSetModel } from '../../models/skillset.model';

import PageTitle from '../common/page-title/page-title.component';
import SkillSet from './skill-set/skill-set.component';

import { AboutContainer, Paragraph } from './about-me.styles';
import { fetchSkillSetCollection } from '../../services/skillset.service';

const AboutMe = () => {
  const [skillSets, setSkills] = useState<SkillSetModel[] | null>(null);

  useEffect(() => {
    /** firebase fetch goes here */
    const fetchFromFirebaseAsync = async () => {
      const skills = await fetchSkillSetCollection();

      setSkills(skills as SkillSetModel[]);
    };

    fetchFromFirebaseAsync();
  }, []);

  return (
    <AboutContainer>
      <PageTitle>
        <h4>About Me</h4>
      </PageTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        ante velit, eu eleifend sapien gravida sit amet. Nunc ex ligula,
        convallis scelerisque dui ut, tincidunt vehicula est. Pellentesque id
        ipsum id magna pulvinar bibendum. Nullam nisl nisl, malesuada sed semper
        at, auctor vitae est. Mauris iaculis luctus egestas. Proin nulla ex,
        rutrum nec hendrerit molestie, venenatis faucibus nunc
      </Paragraph>
      {skillSets?.map((skillSet) => (
        <SkillSet key={skillSet.id} skillSet={skillSet} />
      ))}
    </AboutContainer>
  );
};

export default AboutMe;
