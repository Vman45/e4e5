import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: "Courier New", Courier, monospace;
	border-radius: 5px;
  border: 2px solid #D16666;
  width: 25vw;
	height: 4vh;
  font-size: 1.2em;
  padding-left: .5em;
`;

export const Prompt = (props) => {
  const [text, updateText] = useState('');
  const { history } = useReactRouter();

  const handleSubmit = (event) => {
    history.push(`/${text}`)
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <StyledInput placeholder='enter a lichess username' type='text' onChange={(event)=>{updateText(event.target.value)}}/>
    </form>
  </>
  );
}