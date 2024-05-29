import React from 'react';
import { IngredientProps } from "../types";

const Ingredient:React.FC<IngredientProps> = ({name, cost, img, onAdd, onDelete}) => {
    return (
        <div className="ingredient d-flex align-items-center gap-3">
            <img src={img} alt={img}/>
            <h2 className="m-0">{name}</h2>
            <p className="m-0">{cost} KGS</p>
            <button onClick={onAdd} className='btn btn-primary'>Добавить</button>
            <button onClick={onDelete} className='btn btn-danger'>Удалить</button>
        </div>
    )
} 


export default Ingredient;