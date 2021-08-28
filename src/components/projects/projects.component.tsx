import { useState, useEffect } from 'react';

import { ProjectModel } from '../../models/project.model';
import { fetchProjects } from '../../services/projects.service';

import PageTitle from '../common/page-title/page-title.component';
import ProjectCard from './project-card/project-card.component';
import { Masonry } from 'masonic';

import { ProjectsContainer } from './projects.styles';

const Projects = () => {
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  useEffect(() => {
    const fetchFirestoreAsync = async () => {
      const projects = await fetchProjects();

      setProjects(projects as ProjectModel[]);
    };

    fetchFirestoreAsync();
  }, []);

  return (
    <ProjectsContainer>
      <div className='p-title'>
        <PageTitle>Projects</PageTitle>
      </div>

      <Masonry
        columnGutter={10}
        overscanBy={2}
        items={projects}
        columnWidth={300}
        render={ProjectCard}
      />
    </ProjectsContainer>
  );
};

export default Projects;
