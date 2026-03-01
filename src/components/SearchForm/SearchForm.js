import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    
    const dispatch = useDispatch();

    const searchString = useSelector(state => state.searchString);

    const [search, setSearch] = useState(searchString || '');

    useEffect(() => {
        setSearch(searchString || '');
    }, [searchString]);


    const handleSubmit = e => {
        e.preventDefault();

        // dispatch({type: 'UPDATE_SEARCHSTRING', payload: search});
        dispatch(updateSearchString(search));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;