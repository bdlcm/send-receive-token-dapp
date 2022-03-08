import {space} from '../styles/theme';
import styled from 'styled-components'


export const BackDrop = styled.div`
 
 display: flex;
 flex-wrap:column;
 flex-wrap:wrap;
 
`;

export const BackGround = styled.div`
background-color: #282c34;
 display: flex;
 
 padding: ${(props) => props.theme.space[4]};
 margin: ${(props) => props.theme.space[2]};

align-items: center;
justify-content: space-evenly;
 color: white;
max-width: fit-content;
`;
 

export const Card = styled.div`
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[2]};
  width:100%;
  flex-grow:1;

  background-color: white;
  text-align: center;
   color:black;
`;
export const Descriptor = styled.div`
 
  text-align: center;
  padding: ${(props) => props.theme.space[1]};
  font-size:  ${(props) => props.theme.fontSizes.caption};;

  font-weight:  ${(props) => props.theme.fontWeights.regular};;
  color:black;
`;

export const Number = styled.div`
padding: ${(props) => props.theme.space[1]};
font-size:  ${(props) => props.theme.fontSizes.body};;

text-align: center;
  font-weight:  ${(props) => props.theme.fontWeights.bold};;
  color:black;
`;


 
export const OtherButton = styled.button``