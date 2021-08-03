import PageTitle from '../common/page-title/page-title.component';
import BlogCard from './blog-card/blog-card.component';
import { BlogsContainer } from './blogs.styles';

const Blogs = () => {
  return (
    <BlogsContainer>
      <div className='b-title'>
        <PageTitle>Blogs</PageTitle>
      </div>
      <div className='blogs-list'>
        <BlogCard />
      </div>
    </BlogsContainer>
  );
};

export default Blogs;
