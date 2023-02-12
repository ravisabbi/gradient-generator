import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  CustomText,
  DirectionItemsList,
  Form,
  FieldContainer,
  ColorInput,
  Label,
  GenerateButton,
  ResponsiveContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    // eslint-disable-next-line react/no-unused-state
    colorValue1: '#8ae323',
    // eslint-disable-next-line react/no-unused-state
    colorValue2: '#014f7b',
    backgroundValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeId: gradientDirectionsList[0].directionId,
  }

  onChangeDirection = id => {
    const activeItem = gradientDirectionsList.find(
      eachItem => eachItem.directionId === id,
    )

    this.setState({
      direction: activeItem.value,
      activeId: activeItem.directionId,
    })
  }

  onChangeFirstColor1 = event => {
    this.setState({colorValue1: event.target.value})
  }

  onChangeFirstColor2 = event => {
    this.setState({colorValue2: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {direction, colorValue1, colorValue2} = this.state

    this.setState({
      backgroundValue: `to ${direction},${colorValue1},${colorValue2}`,
    })
  }

  render() {
    const {backgroundValue, colorValue1, colorValue2, activeId} = this.state

    return (
      <GradientGeneratorContainer
        backgroundValue={backgroundValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <CustomText>Choose Direction</CustomText>
        <DirectionItemsList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              itemDetails={eachItem}
              onChangeDirection={this.onChangeDirection}
              key={eachItem.directionId}
              isActive={activeId === eachItem.directionId}
            />
          ))}
        </DirectionItemsList>
        <CustomText>Pick the Colors</CustomText>
        <Form onSubmit={this.onSubmitForm}>
          <ResponsiveContainer>
            <FieldContainer>
              <Label>{colorValue1}</Label>
              <ColorInput
                type="color"
                value={colorValue1}
                onChange={this.onChangeFirstColor1}
              />
            </FieldContainer>
            <FieldContainer>
              <Label>{colorValue2}</Label>
              <ColorInput
                type="color"
                value={colorValue2}
                onChange={this.onChangeFirstColor2}
              />
            </FieldContainer>
          </ResponsiveContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </Form>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
