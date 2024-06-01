import { StateIngredient } from "../types";

const FinalTotalPrice = (ingredient:string, array: StateIngredient[]) => {
    const amount = array.find(item => item.name === ingredient);
    if (amount) {
      return amount.count;
    } else {
      throw new Error ('Count not found!');
    }
}

export default FinalTotalPrice;