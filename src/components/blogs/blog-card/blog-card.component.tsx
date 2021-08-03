import { BDetails, BImage, BlogCardContainer } from './blog-card.styles';

const BlogCard = () => {
  return (
    <BlogCardContainer>
      <BImage />
      <BDetails>
        <h4 className='bc-title'>...</h4>
        <p className='bc-summary'>
          Some small description of the blog line 1 Some small description of
          the blog line 1
        </p>
      </BDetails>
    </BlogCardContainer>
  );
};

export default BlogCard;
