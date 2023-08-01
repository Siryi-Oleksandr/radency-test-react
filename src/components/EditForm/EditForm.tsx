import React, { FC, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  FormStyled,
  Label,
  InputText,
  Select,
  BtnSubmit,
  Textarea,
} from '../AddForm/AddForm.styled';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { editNote } from '../../redux/notesSlice';
import { INote } from '../../types/INote';
import { createFormatedDate, parseDates } from '../../services';

export interface IForm {
  name: string;
  category: 'Task' | 'Random Thought' | 'Idea';
  content: string;
}

interface IProps {
  note: INote;
  closeModal: () => void;
}

const EditForm: FC<IProps> = ({ note, closeModal }) => {
  const [formData, setFormData] = useState<IForm>({
    name: note.name,
    category: note.category,
    content: note.content,
  });
  const dispatch = useAppDispatch();

  // Form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.category || !formData.content) {
      toast.error(`Please fill in all required fields.`);
      return;
    }

    const newNote: INote = {
      id: note.id,
      name: formData.name,
      created: createFormatedDate(),
      category: formData.category,
      content: formData.content,
      dates: parseDates(formData.content),
    };
    dispatch(editNote(newNote));

    closeModal();
  };

  const handleChange = (
    evt: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = evt.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        Name:
        <InputText
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Category:
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </Select>
      </Label>

      <Label>
        Content:
        <Textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></Textarea>
      </Label>

      <BtnSubmit type="submit" value="Submit" />
    </FormStyled>
  );
};

export default EditForm;
