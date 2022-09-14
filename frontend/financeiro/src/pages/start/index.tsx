import * as C from './styles';
import { useState, useEffect, useCallback } from 'react';
import Form from '../../components/Form';

const Start = () => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Login</C.HeaderText>
      </C.Header>
      <C.Body>
        <Form/>
      </C.Body>
    </C.Container>
  );
};

export default Start;
