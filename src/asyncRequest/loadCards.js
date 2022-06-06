import axios from "axios";
import { cardsAction } from "../store/actions/cardsAction";

export const loadCards = () => async (dispatch) => {
  try {
    const url =
      "https://ancient-atoll-19574.herokuapp.com/https://bonus.evotor.tech/api/3rdparty/card";

    const { data: cards } = await axios.get(url, {
      headers: {
        Authorization: "b7d5ea70-5290-4d3c-9dd0-722d74ef9960",
      },
    });
    dispatch(cardsAction(cards));
  } catch (err) {
    console.error(err);
  } 
};
