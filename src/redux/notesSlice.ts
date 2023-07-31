import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INote } from 'types/INote';
import { initialNotes } from 'bd/notes';

// Define a type for the slice state
interface INotesState {
  notes: INote[];
  archivedNotes: []; // TODO inport from /types
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
  },
});

export const { createNote } = notesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default notesSlice.reducer;
