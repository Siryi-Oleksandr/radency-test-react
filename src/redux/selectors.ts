import { INotesState } from 'types/IState';

export const selectNotes = (state: INotesState) => state.notes;
export const selectArchivedNotes = (state: INotesState) => state.archivedNotes;
