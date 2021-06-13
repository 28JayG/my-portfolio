import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
  FiAtSign,
} from 'react-icons/fi';
import { externalRoutes } from '../../constants/routes';
import { openLink } from '../../utils/utils';

import {
  CardContainer,
  ProfileImage,
  Column,
  Name,
  Occupation,
  SocialsRow,
} from './profile-card.styles';

const ProfileCard = () => {
  const { instagramLink, githubLink, linkedInLink, whatsappLink, email } =
    externalRoutes;

  return (
    <CardContainer>
      <ProfileImage />
      <Column>
        <div>
          <Name>Jay Gandhi</Name>
          <Occupation>Frontend Developer</Occupation>
        </div>
        <SocialsRow>
          <li>
            <FiInstagram onClick={() => openLink(instagramLink)} />
          </li>
          <li>
            <FiGithub onClick={() => openLink(githubLink)} />
          </li>
          <li>
            <FiLinkedin onClick={() => openLink(linkedInLink)} />
          </li>
          <li>
            <FiMessageCircle onClick={() => openLink(whatsappLink)} />
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <FiAtSign />
            </a>
          </li>
        </SocialsRow>
      </Column>
    </CardContainer>
  );
};

export default ProfileCard;
