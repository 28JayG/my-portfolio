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
        columnCount={2}
        columnWidth={300}
        columnGutter={40}
        items={items}
        render={ProjectCard}
      />
    </ProjectsContainer>
  );
};

export default Projects;
