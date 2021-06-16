import React from 'react';
import { Flap, FolderContainer, Title } from './folder.styles';

import './folder.styles.tsx';

type Props = {
  baseColor: string;
  index: number;
  title?: string;
};

type State = {
  open: boolean;
};

class Folder extends React.Component<Props> {
  state = {
    open: false,
  };

  toggleOpen = () =>
    this.setState((prevState: State) => ({ open: !prevState.open }));

  render() {
    const { baseColor, index, title, children } = this.props;
    const { open } = this.state;

    return (
      <FolderContainer
        id={`folder${index}`}
        index={index}
        isOpen={open}
        bgColor={baseColor}
      >
        <Flap
          index={index}
          isOpen={open}
          bgColor={baseColor}
          onClick={this.toggleOpen}
        />
        <Title>{title}</Title>
        {children}
      </FolderContainer>
    );
  }
}

export default Folder;
