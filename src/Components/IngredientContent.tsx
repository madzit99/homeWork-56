import { StateIngredient } from "../types";

const IngredientContent:React.FC<StateIngredient> = ({name, count}) => {
    const ingredientDivs = [];
    
    for (let i = 0; i > count; i++) {
        ingredientDivs.push(<div className={name}></div>)
    };

    return ingredientDivs;
}

export default IngredientContent;