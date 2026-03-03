import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';

const Card = props => {

  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch({ type: 'TOGGLE_CARD_FAVORITE', payload: props.id });
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        onClick={handleToggleFavorite}
        className={styles.favorite + (props.isFavorite ? ' ' + styles.favoriteActive : '')}>
        <span className="fa fa-star-o"></span>
      </button>
    </li>
  ); 
};

export default Card;