import { useEffect } from 'react';
import { useState } from 'react';
import { BlogModel } from '../../models/blog.model';
import { fetchBlogs } from '../../services/blogs.service';
import PageTitle from '../common/page-title/page-title.component';
import BlogCard from './blog-card/blog-card.component';
import { BlogsContainer } from './blogs.styles';

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

  useEffect(() => {
    const fetchFirestoreAsync = async () => {
      const blogs = await fetchBlogs();

      setBlogs(blogs as BlogModel[]);
    };

    fetchFirestoreAsync();
  }, []);

  return (
    <BlogsContainer>
      <div className='b-title'>
        <PageTitle>Blogs</PageTitle>
      </div>
      <div className='blogs-list'>
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </BlogsContainer>
  );
};

export default Blogs;
