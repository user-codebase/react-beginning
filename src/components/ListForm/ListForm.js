import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    dispatch(addList({ title, description }));

    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Description:</span>
        <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;