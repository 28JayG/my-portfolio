import { appColors } from '../constants/colors';

type TargetType = '_blank' | '_self' | '_parent';

export const openLink = (link: string, target?: TargetType) =>
  target ? window.open(link, target) : window.open(link, '_blank');

export const setProfileCardColor = (activeRoute: string) => {
  switch (activeRoute) {
    case '/blogs':
    case '/projects':
      return appColors.black;
    default:
      return appColors.white;
  }
};

export const setBackgroundColor = (activeRoute: string) => {
  switch (activeRoute) {
    case '/blogs':
      return appColors.darkYellow
    case '/projects':
      return appColors.orange;
    default:
      return appColors.hoverBlue;
  }
};