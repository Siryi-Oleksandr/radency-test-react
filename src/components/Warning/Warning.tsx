import React, { FC } from 'react';
import { TextBtn } from 'components';
import { BtnWrapper, Text } from './Warning.styled';

interface IProps {
  text: string;
  action: () => void;
  cancel: () => void;
}

const Warning: FC<IProps> = ({ text, action, cancel }) => {
  return (
    <div>
      <Text>{text}</Text>
      <BtnWrapper>
        <TextBtn onClick={action} text="Ok" />
        <TextBtn onClick={cancel} text="Cancel" />
      </BtnWrapper>
    </div>
  );
};

export default Warning;
