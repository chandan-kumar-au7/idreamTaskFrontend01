import { fakedata } from "../../containers/Ecommerce/Cards/config";
const cardActions = {
  CHANGE_CARDS: "CHANGE_CARDS",
  addCard: card => {
    return (dispatch, getState) => {
      const cards = [card, ...getState().Cards.cards];
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards
      });
    };
  },
  editCard: editCard => {
    return (dispatch, getState) => {
      const oldCards = getState().Cards.cards;
      const cards = [];
      oldCards.forEach(card => {
        if (card.id !== editCard.id) {
          cards.push(card);
        } else {
          cards.push(editCard);
        }
      });
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards
      });
    };
  },
  deleteCard: deletedCard => {
    return (dispatch, getState) => {
      const oldCards = getState().Cards.cards;
      const cards = [];
      oldCards.forEach(card => {
        if (card.id !== deletedCard.id) {
          cards.push(card);
        }
      });
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards
      });
    };
  },
  deleteCards: selected => {
    return (dispatch, getState) => {
      const cards = getState().Cards.cards;
      const newCards = [];
      cards.forEach(card => {
        const selectedIndex = selected.indexOf(card.id);
        if (selectedIndex === -1) {
          newCards.push(card);
        }
      });
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards: newCards
      });
    };
  },
  restoreCards: () => {
    return {
      type: cardActions.CHANGE_CARDS,
      cards: fakedata
    };
  }
};
export default cardActions;
