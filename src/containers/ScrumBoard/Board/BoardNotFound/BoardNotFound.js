import React from 'react';
import Button from '@material-ui/core/Button';
import { Wrapper, Title, Text, Icon } from './NoBoardFounds.style';
import emptyProjectPlaceHolder from '../../../../assets/images/icon/12.svg';
export default function NoBoardFounds({ history, match }) {
  return (
    <Wrapper>
      <Icon src={emptyProjectPlaceHolder} />
      <Title>You Currently have no projects</Title>
      <Text>Let's Create your first project in Isomorphic</Text>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(`${match.url}/new`)}
      >
        Create Project
      </Button>
    </Wrapper>
  );
}
