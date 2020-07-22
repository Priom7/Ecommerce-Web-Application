export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: "1234",
      title: "The HeadPhone",
      price: 754100,
      rating: 3,
      image:
        "https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png",
    },
    {
      id: "3234",
      title: "The HeadPhone",
      price: 754100,
      rating: 3,
      image:
        "https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant resolve id: ${action.id}`);
      }
      return { ...state, basket: newBasket };

      break;

    default:
      return state;
  }
};

export default reducer;
