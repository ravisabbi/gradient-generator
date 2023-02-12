import {GradientItemButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onChangeDirection, isActive} = props
  const {displayText, directionId} = itemDetails
  const changeDirecton = () => {
    onChangeDirection(directionId)
  }

  return (
    <ListItem>
      <GradientItemButton onClick={changeDirecton} isActive={isActive}>
        {displayText}
      </GradientItemButton>
    </ListItem>
  )
}
export default GradientDirectionItem
