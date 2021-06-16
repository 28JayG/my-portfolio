import { appColors } from '../../constants/colors';
import Folder from '../folder/folder.component';

const Blogs = () => {
  return (
    <Folder
      baseColor={appColors.lightYellow}
      index={2}
      title='My Blogs'
    ></Folder>
  );
};

export default Blogs;
