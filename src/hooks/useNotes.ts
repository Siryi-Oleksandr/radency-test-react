import { useAppSelector } from './reduxHooks';
import {
  selectNotes,
  selectArchivedNotes,
  selectCountNotes,
  selectCountArchivedNotes,
} from 'redux/selectors';

export const useNotes = () => {
  const notes = useAppSelector(selectNotes);
  const archivedNotes = useAppSelector(selectArchivedNotes);
  const countNotes = useAppSelector(selectCountNotes);
  const countArchivedNotes = useAppSelector(selectCountArchivedNotes);

  return {
    notes,
    archivedNotes,
    countNotes,
    countArchivedNotes,
  };
};
