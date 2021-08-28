import { FC } from 'react';
import { EMPTY_BLOG_IMAGE_URL } from '../../../constants/links';
import { BlogModel } from '../../../models/blog.model';
import { BDetails, BImage, BlogCardContainer } from './blog-card.styles';

const BlogCard: FC<{ blog: BlogModel }> = ({ blog }) => {
  const { title, summary, imageUrl, blogLink } = blog;

  return (
    <a href={blogLink} target='_blank' rel='noreferrer'>
      <BlogCardContainer>
        <BImage imageUrl={imageUrl ?? EMPTY_BLOG_IMAGE_URL} />
        <BDetails>
          <h4 className='bc-title'>{title}</h4>
          <p className='bc-summary'>{summary}</p>
        </BDetails>
      </BlogCardContainer>
    </a>
  );
};

export default BlogCard;
