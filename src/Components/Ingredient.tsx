import { IngredientProps } from "../types";

const Ingredient:React.FC<IngredientProps> = ({name, cost, img}) => {
    return (
        <div className="ingredient d-flex align-items-center gap-3">
            <img src={img} alt={img}/>
            <h2 className="m-0">{name}</h2>
            <p className="m-0">{cost}</p>
            {/* <p>{total}</p> */}
        </div>
    )
} 


export default Ingredient;