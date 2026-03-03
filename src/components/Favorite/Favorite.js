import Container from '../Container/Container';
// import Hero from '../../Hero/Hero';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import styles from './Favorite.module.scss';

const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCards);

  if (!favoriteCards.length) {
    return (
      <Container>
        <PageTitle>Favorite</PageTitle>
        <p>No cards...</p>
      </Container>
    );
  }

  return (
    <Container>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </article>
    </Container>
  );
};

export default Favorite;