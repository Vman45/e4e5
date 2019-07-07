import React from 'react';
import styled from 'styled-components';
import useReactRouter from 'use-react-router';

import { Prompt } from './Prompt';
 
const Container = styled.div`
  grid-row: navbar-bottom / bottom;
  display: grid;
  grid-template-columns: [site-left] 1fr [content-left] 2fr [content-right] 1fr [site-right];
  grid-template-rows: [site-top] .7fr [content-top] 2fr [content-bottom] 1fr [site-bottom];
`;

const Content = styled.div`
  justify-self: center;
  text-align: center;
  grid-column: content-left / content-right;
  grid-row: content-top / content-bottom; 
`;

const Link = styled.p`
  font-size: 1.5em
  cursor: default
  text-align: left;
  &:hover {
    font-weight: bold;
  }
`;

const ExplainWrapper = styled.div`
  font-size: 1.2em;
  text-align: left;
  padding: 1em;
  font-weight: bold;
`;

export const Landing = () => {
  const { history } = useReactRouter();

  const Linker = (props) => {
    return <li><Link onClick={()=> {history.push(`/${props.username}`)}}>@{props.username} => {props.text} </Link></li>
  };

  return <Container>
    <Content>
      <ExplainWrapper>Study your opening routine. Or study someone else's <span role="img" aria-label="eyes">👀</span></ExplainWrapper>
      <br></br>
      <Prompt/>
      <br></br>
      <br></br>
      <ul>
        <Linker text='Magnus Carlsen (GM, goat)' username='drnykterstein'/>
        <Linker text='Andrew Tang (GM, bullet champ)' username='penguingim1'/>
        <Linker text='Eric Hansen (GM, chess youtuber)' username='chessbrahs'/>
        <Linker text='Agadmator (IM, chess youtuber)' username='agadmator'/>
        <Linker text='Max Wolff (me, a noob)' username='lasergun'/>
        <li><Link onClick={()=>window.open('https://lichess.org/player')}>Find more</Link></li>
      </ul>
    </Content>
  </Container>
}