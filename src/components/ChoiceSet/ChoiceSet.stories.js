import React from 'react'
import ChoiceSet from './ChoiceSet'

export default {
  title: 'ChoiceSet',
}

const choices = ["do4", "re4", "mi4"]

export const choiceSet = () => <ChoiceSet choices={choices} />

// toStorybook.story = {
//   name: 'to Storybook',
// };
