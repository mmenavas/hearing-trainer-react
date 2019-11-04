import React from 'react'
import NoteSet from './NoteSet'

export default {
  title: 'NoteSet',
}

const notes = ["do4", "re4", "mi4"]

export const noteSet = () => <NoteSet notes={notes} />

// toStorybook.story = {
//   name: 'to Storybook',
// };
