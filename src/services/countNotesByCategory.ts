import { INote } from 'types/INote';

function countNotesByCategory(notes: INote[]) {
  const initialCount = {
    Task: 0,
    Idea: 0,
    'Random Thought': 0,
  };

  return notes.reduce((acc, note) => {
    const category = note.category;
    if (category in acc) {
      acc[category]++;
    }
    return acc;
  }, initialCount);
}

export default countNotesByCategory;
