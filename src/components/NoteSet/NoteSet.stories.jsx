import NoteSet from './NoteSet'

export default {
  title: 'NoteSet',
}

const notes = ["C4", "D4", "E4"]

export const noteSet = () => <NoteSet notes={notes} />
