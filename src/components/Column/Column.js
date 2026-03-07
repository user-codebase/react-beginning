import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getCardsByColumn } from '../../redux/cardsRedux';

const Column = props => {

    // const cards = useSelector(state => getFilteredCards(state, props.id));
    const cards = useSelector(state => getCardsByColumn(state, props.id));
    console.log('Column render');
    // const searchString = useSelector(state => state.searchString);
    
    // const cards = useSelector(state => state.cards);
    // const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())));
    // console.log("column id:", props.id);
    return (
        <article className={styles.column}>
          <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
          </ul>
          <CardForm columnId={props.id} />
        </article>
    );
};

export default Column;