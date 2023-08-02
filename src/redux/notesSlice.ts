import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INote } from 'types/INote';
import { initialNotes } from 'bd/notes';

// Define a interface for the slice state
interface INotesState {
  notes: INote[];
  archivedNotes: INote[];
}

// Define the initial state
const initialState: INotesState = {
  notes: initialNotes,
  archivedNotes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<INote>) => {
      state.notes = [...state.notes, action.payload];
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    editNote: (state, action: PayloadAction<INote>) => {
      const updatedNote = action.payload;
      state.notes = state.notes.map(note =>
        note.id === updatedNote.id ? updatedNote : note
      );
    },
    archiveNote: (state, action: PayloadAction<INote>) => {
      const noteToArchive = action.payload;
      state.archivedNotes = [...state.archivedNotes, noteToArchive];
      state.notes = state.notes.filter(note => note.id !== noteToArchive.id);
    },
    unArchiveNote: (state, action: PayloadAction<INote>) => {
      const noteToUnArchive = action.payload;
      state.notes = [...state.notes, noteToUnArchive];
      state.archivedNotes = state.archivedNotes.filter(
        note => note.id !== noteToUnArchive.id
      );
    },
    archiveAllNotes: state => {
      state.archivedNotes = [...state.archivedNotes, ...state.notes];
      state.notes = [];
    },
    unArchiveAllNotes: state => {
      state.notes = [...state.notes, ...state.archivedNotes];
      state.archivedNotes = [];
    },
    deleteAllNotes: state => {
      state.notes = [];
    },
  },
});

export const {
  createNote,
  deleteNote,
  editNote,
  archiveNote,
  archiveAllNotes,
  deleteAllNotes,
  unArchiveAllNotes,
  unArchiveNote,
} = notesSlice.actions;

export default notesSlice.reducer;
