import styled from 'styled-components'

export const GradientItemButton = styled.button`
  color: black;
  font-family: 'Roboto';
  font-size: 16px;
  height: 25px;
  width: 80px;
  background-color: #ffffff;
  border: none;
  height: 40px;
  border-radius: 5px;
  font-weight: 600;
  width: 100%;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  border: none;
  width: 200px;
  margin: 5px;
`
