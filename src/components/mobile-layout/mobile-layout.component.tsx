import { FC } from 'react';
import AboutMe from '../about me/about-me.component';
import Blogs from '../blogs/blogs.component';
import Projects from '../projects/projects.component';

const MobileLayout: FC = () => {
  return (
    <>
      <AboutMe />
      <Projects />
      <Blogs />
    </>
  );
};

export default MobileLayout;
