import * as React from 'react';

import Fullscreen from 'common/components/flex/Fullscreen';
import Title from 'app/components/Title';
import SubTitle from 'app/components/SubTitle';
import Centered from 'common/components/flex/Centered';

import { Header } from './elements';

type Title = {
  delay: number
  content: string
}

type Props = {
  titles: Title[]
}

const Skeleton: React.SFC<Props> = ({ titles }) => {
  return (
    <Fullscreen style={{ height: '100vh' }}>
      <Header />
      <Centered horizontal vertical>
        <Title delay={titles[0].delay}>{titles[0].content}</Title>
        {titles.slice(1).map((title, index) => (
          <SubTitle key={String(index)} delay={title.delay}>
            {title.content}
          </SubTitle>
        ))}
      </Centered>
    </Fullscreen>
  );
}

export default Skeleton;