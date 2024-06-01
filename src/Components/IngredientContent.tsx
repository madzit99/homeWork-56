import React from 'react';
import { StateIngredient } from '../types';

const IbgredientContent: React.FC<StateIngredient> = ({name, count}) => {
  const ingredientDivs = [];
  for (let i = 0; i < count; i++) {
    ingredientDivs.push(<div key={`${name}-${i}`} className={name}></div>);
  }
  return ingredientDivs;
};

export default IbgredientContent;