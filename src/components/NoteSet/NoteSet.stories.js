import React from 'react'
import NoteSet from './NoteSet'

export default {
  title: 'NoteSet',
}

const Notes = ["do4", "re4", "mi4"]

export const NoteSet = () => <NoteSet Notes={Notes} />

// toStorybook.story = {
//   name: 'to Storybook',
// };
