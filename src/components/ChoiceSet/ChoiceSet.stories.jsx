import ChoiceSet from './ChoiceSet'

export default {
  title: 'ChoiceSet',
}

const choices = ["C4", "D4", "E4"]
const disabled = ["C4", "D4"]

export const choiceSet = () => <ChoiceSet choices={choices} onChoiceSelection={(note) => console.log('You selected ' + note)} disabled={disabled} />
