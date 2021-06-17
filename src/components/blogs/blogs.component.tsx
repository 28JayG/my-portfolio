import Folder from '../folder/folder.component';
import BlogCard from './blog-card/blog-card.component';

import { appColors } from '../../constants/colors';
import { BlogsGrid } from './blogs.styles';

const Blogs = () => {
  return (
    <Folder baseColor={appColors.lightYellow} index={1} title='Blogs'>
      <BlogsGrid>
        <BlogCard />
      </BlogsGrid>
    </Folder>
  );
};

export default Blogs;
