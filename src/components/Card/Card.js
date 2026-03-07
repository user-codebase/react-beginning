import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(props.id));
  };

  const handleRemove = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          onClick={handleFavorite}
          className={styles.favorite + (props.isFavorite ? ' ' + styles.favoriteActive : '')}>
          <span className="fa fa-star-o"></span>
        </button>
        <button
          onClick={handleRemove}
          className={styles.remove}
        >
          <span className="fa fa-trash"></span>
        </button>
      </div>
    </li>
  ); 
};

export default Card;