import { createSelector } from '@reduxjs/toolkit';
import { INotesState } from 'types/IState';
import { countNotesByCategory } from 'services';

export const selectNotes = (state: { notes: INotesState }) => state.notes.notes;
export const selectArchivedNotes = (state: { notes: INotesState }) =>
  state.notes.archivedNotes;

export const selectCountNotes = createSelector([selectNotes], notes =>
  countNotesByCategory(notes)
);
export const selectCountArchivedNotes = createSelector(
  [selectArchivedNotes],
  archivedNotes => countNotesByCategory(archivedNotes)
);
