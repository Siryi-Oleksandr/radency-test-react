import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import {
  FormStyled,
  Label,
  InputText,
  Select,
  BtnSubmit,
  Textarea,
} from './AddForm.styled';
import { useAppDispatch } from 'hooks/reduxHooks';
import { createNote } from 'redux/notesSlice';
import { INote } from 'types/INote';
import { createFormatedDate, parseDates } from 'services';

export interface IForm {
  name: string;
  category: 'Task' | 'Random Thought' | 'Idea';
  content: string;
}

const initialState: IForm = {
  name: '',
  category: 'Task',
  content: '',
};

interface IProps {
  closeModal: () => void;
}

const AddForm: FC<IProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<IForm>(initialState);
  const dispatch = useAppDispatch(); // Get the dispatch function from Redux

  // Form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.category || !formData.content) {
      toast.error(`Please fill in all required fields.`);
      return;
    }

    const newNote: INote = {
      id: nanoid(),
      name: formData.name,
      created: createFormatedDate(),
      category: formData.category,
      content: formData.content,
      dates: parseDates(formData.content),
    };
    dispatch(createNote(newNote));

    // Reset the form after submission
    setFormData(initialState);
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

export default AddForm;
