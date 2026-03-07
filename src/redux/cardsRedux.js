import shortid from 'shortid';
import strContains from '../utils/strContains';

// selectors
export const getAllCards = ({ cards }) => cards;

// export const getCardsByColumn = ({ cards }, columnId) =>
//   cards.filter(card => card.columnId === columnId);

export const getCardsByColumn = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

export const getFilteredCards = ({ cards, searchString }) =>
  cards.filter(card => strContains(card.title, searchString));

export const getFavoriteCards = ({ cards }) =>
  cards.filter(card => card.isFavorite);

// actions
const createActionName = actionName => `app/cards/${actionName}`;

const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({
  type: ADD_CARD,
  payload,
});

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  payload,
});

export const removeCard = payload => ({ 
  type: REMOVE_CARD,
  payload 
});

// reducer
const cardsReducer = (statePart = [], action) => {
  switch (action.type) {

    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];

    case TOGGLE_FAVORITE:
      return statePart.map(card =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );

    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
      
    default:
      return statePart;
  }
};

export default cardsReducer;