import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.backgroundValue});
  min-height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: #ffffff;
  text-align: center;
`
export const CustomText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 500;
`

export const DirectionItemsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorInput = styled.input`
  font-size: 20px;

  border-width: 0px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  height: 40px;
  width: 120px;
`

export const Label = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
`
export const GenerateButton = styled.button`
  height: 30px;
  width: 120px;
  background-color: #00c9b7;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
