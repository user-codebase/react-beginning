import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';
import { useParams, Navigate } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {

	// const columns = useSelector(state => state.columns);
	//const columns = useSelector(getColumnsByList);
	//const listData = useSelector(state => getListById(state, 1));
	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));

	if (!listData) return <Navigate to="/" />;

	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>{listData.title}</h2>
			</header>
			<p className={styles.description}>{listData.description}</p>
			<SearchForm />
			<section className={styles.columns}>
				{columns.map(column => <Column key={column.id} {...column}/>)}
			</section>
			{/* <ColumnForm /> */}
			<ColumnForm listId={listId} />
		</div>
	);
};

export default List;