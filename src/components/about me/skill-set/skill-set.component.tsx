import { FC } from 'react';
import { SkillSetModel } from '../../../models/skillset.model';
import { SkillSetContainer, SkillLevel } from './skill-set.styles';

const SkillSet: FC<{ skillSet: SkillSetModel }> = ({ skillSet }) => {
  const { skillPercentage, skills } = skillSet;

  return (
    <SkillSetContainer>
      <p>{skills}</p>
      <SkillLevel>
        <div style={{ width: `${skillPercentage}%` }} className='level'></div>
      </SkillLevel>
    </SkillSetContainer>
  );
};

export default SkillSet;
