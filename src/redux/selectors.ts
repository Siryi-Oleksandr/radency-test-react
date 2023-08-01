import { INotesState } from 'types/IState';

export const selectNotes = (state: { notes: INotesState }) => state.notes.notes;
export const selectArchivedNotes = (state: { notes: INotesState }) =>
  state.notes.archivedNotes;
