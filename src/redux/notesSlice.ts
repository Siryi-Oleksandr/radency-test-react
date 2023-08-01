import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INote } from 'types/INote';
import { initialNotes } from 'bd/notes';
// import { toast } from 'react-hot-toast';

// Define a type for the slice state
interface INotesState {
  notes: INote[];
  archivedNotes: INote[];
}

// Define the initial state using that type
const initialState: INotesState = {
  notes: initialNotes,
  archivedNotes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
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
      state.archivedNotes.push(action.payload);
      state.notes = state.notes.filter(note => note.id !== action.payload.id);
    },
    unArchiveNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
      state.archivedNotes = state.archivedNotes.filter(
        note => note.id !== action.payload.id
      );
    },
    archiveAllNotes: state => {
      state.archivedNotes.push(...state.notes);
      state.notes = [];
    },
    unArchiveAllNotes: state => {
      state.notes.push(...state.archivedNotes);
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

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default notesSlice.reducer;
