import { SkillSetContainer, SkillLevel } from './skill-set.styles';

const SkillSet = () => {
  return (
    <SkillSetContainer>
      <p>Skill Set 1</p>
      <SkillLevel>
        <div style={{ width: `40%` }} className='level'></div>
      </SkillLevel>
    </SkillSetContainer>
  );
};

export default SkillSet;
