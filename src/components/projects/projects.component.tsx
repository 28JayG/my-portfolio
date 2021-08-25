import PageTitle from '../common/page-title/page-title.component';
import ProjectCard from './project-card/project-card.component';
import { Masonry } from 'masonic';

import { ProjectsContainer } from './projects.styles';

const Projects = () => {
  let i = 0;
  const items = Array.from(Array(5), () => ({ id: i++ }));

  return (
    <ProjectsContainer>
      <div className='p-title'>
        <PageTitle>Projects</PageTitle>
      </div>
      
      <Masonry
        columnGutter={10}
        overscanBy={2}
        items={items}
        columnWidth={300}
        render={ProjectCard}
      />
    </ProjectsContainer>
  );
};

export default Projects;
