import axios from "axios";
import { receiptAction } from "../store/actions/receiptAction";

export const loadReceipt = () => async (dispatch) => {
  try {
    const url =
      "https://ancient-atoll-19574.herokuapp.com/https://bonus.evotor.tech/api/3rdparty/receipt?from=1&to=9999999998900000000000&cardUuid=f6a6b695-d248-4188-a5ed-376ba29e4136";

    const { data: receipt } = await axios.get(url, {
      headers: {
        Authorization: "b7d5ea70-5290-4d3c-9dd0-722d74ef9960",
      },
    });
    dispatch(receiptAction(receipt));
  } catch (err) {
    console.error(err);
  } 
};
