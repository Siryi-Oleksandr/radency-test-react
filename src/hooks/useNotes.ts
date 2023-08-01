import { useAppSelector } from './reduxHooks';
import { selectNotes, selectArchivedNotes } from 'redux/selectors';

export const useNotes = () => {
  const notes = useAppSelector(selectNotes);
  const archivedNotes = useAppSelector(selectArchivedNotes);

  return {
    notes,
    archivedNotes,
  };
};
