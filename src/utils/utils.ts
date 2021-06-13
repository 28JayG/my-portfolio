type TargetType = '_blank' | '_self' | '_parent'

export const openLink = (link: string, target?: TargetType) =>
  target ? window.open(link, target) : window.open(link, '_blank');
