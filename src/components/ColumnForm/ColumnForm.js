import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // props.action({ title: title, icon: icon });
        dispatch({ type: 'ADD_COLUMN', payload: { title: title, icon: icon } });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>
                <span>Title:</span>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                <span>Icon:</span>
                <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            </label>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;