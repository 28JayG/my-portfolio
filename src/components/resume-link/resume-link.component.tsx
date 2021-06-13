import { FiDownload } from 'react-icons/fi';
import { externalRoutes } from '../../constants/routes';
import { ResumeIcon } from './resume-link.styles';

const ResumeLink = () => {
  return (
    <ResumeIcon href={externalRoutes.resumeLink} download >
      <FiDownload strokeWidth='1' />
      <div className='tool-tip'>Download<br/>Resume</div>
    </ResumeIcon>
  );
};

export default ResumeLink;
