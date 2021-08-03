import {
  PCDetails,
  PCImage,
  ProjectCardContainer,
} from './project-card.styles';

interface PCProps {
  width: any;
  index: any;
  data: any;
}

const ProjectCard: React.FC<PCProps> = ({ width, index, data }) => {
  return (
    <ProjectCardContainer tall={index === 1}>
      <PCImage />
      <PCDetails>
        <h4 className='pc-title'>...</h4>
        <p className='pc-summary'>
          Some thing ABOUT WEBSITESome thing ABOUT WEBSITESome thing ABOUT
          WEBSITE
        </p>
      </PCDetails>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
