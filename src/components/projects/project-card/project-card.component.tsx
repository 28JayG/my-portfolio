import { ProjectModel } from '../../../models/project.model';
import {
  PCDetails,
  PCImage,
  ProjectCardContainer,
} from './project-card.styles';

interface PCProps {
  width: any;
  index: any;
  data: ProjectModel;
}

const ProjectCard: React.FC<PCProps> = ({ width, index, data }) => {
  const { imageUrl, title, projectLink, summary } = data;

  return (
    <a href={projectLink} target='_blank' rel='noreferrer'>
      {' '}
      <ProjectCardContainer tall={index === 1}>
        <PCImage imageUrl={imageUrl} />
        <PCDetails>
          <h4 className='pc-title'>{title}</h4>
          <p className='pc-summary'>{summary}</p>
        </PCDetails>
      </ProjectCardContainer>
    </a>
  );
};

export default ProjectCard;
