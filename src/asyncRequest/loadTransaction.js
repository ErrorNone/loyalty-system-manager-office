import axios from "axios";
import { transactionAction } from "../store/actions/transactionAction";

export const loadTransaction = () => async (dispatch) => {
  try {
    const url =
      "https://ancient-atoll-19574.herokuapp.com/https://bonus.evotor.tech/api/3rdparty/transaction";

    const { data: transaction } = await axios.get(url, {
      headers: {
        Authorization: "b7d5ea70-5290-4d3c-9dd0-722d74ef9960",
      },
    });
    dispatch(transactionAction(transaction));
  } catch (err) {
    console.error(err);
  }
};
