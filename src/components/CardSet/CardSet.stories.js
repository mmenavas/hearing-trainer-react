import React from 'react'
import CardSet from './CardSet'

export default {
  title: 'CardSet',
}

const cards = ["do4", "re4", "mi4"]

export const cardSet = () => <CardSet cards={cards} />

// toStorybook.story = {
//   name: 'to Storybook',
// };
