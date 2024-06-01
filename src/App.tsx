import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { INGREDIENTS } from './Constants';
import Ingredient from './Components/Ingredient';
import { useState } from 'react';
import { StateIngredient } from './types';
import FinalTotalPrice from './Components/FinalTotalPrice';
import IbgredientContent from './Components/IngredientContent';

const App = () => {
  const [ingredients, setIngredients] = useState<StateIngredient[]>([
    {name:'Meat', count:0},
    {name:'Cheese', count:0},
    {name:'Salad', count:0},
    {name:'Becon', count:0},
  ]);

  const addIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return { ...ingredient, count: ingredient.count + 1 };
        }
        return ingredient;
      });
    });
  };

  const calculateTotalCost = () => {
    const totalCost = ingredients.reduce((acc, ingredient) => {
      const ingredientInfo = INGREDIENTS.find(item => item.name === ingredient.name);
      if (ingredientInfo) {
        return acc + ingredientInfo.cost * ingredient.count;
      } else {
        throw new Error('Информация не найдена!');
      }
    }, 30);
    return totalCost;
  };


  const deleteIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          if (ingredient.count > 0) {
            return { ...ingredient, count: ingredient.count - 1 };
          }
        }
        return ingredient;
      });
    });
  };
  return (
    <>
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h2>Ингредиенты</h2>
          {INGREDIENTS.map((ingredient) => (
            <Ingredient
            key={ingredient.name}
            name={ingredient.name}
            cost={ingredient.cost}
            img={ingredient.img}
            total={FinalTotalPrice(ingredient.name, ingredients)}
            onAdd={() => addIngredient(ingredient.name)}
            onDelete={() => deleteIngredient(ingredient.name)}/>
          ) )}
        </div>
        <div className="col d-flex flex-column align-items-center">
          <h2>Бургер</h2>
          <div className="Burger mt-5">
            <div className="BreadTop">
              <div className='sesame'></div>
            </div>
            {ingredients.map((ingredient) => {
             return (
                <IbgredientContent key={ingredient.name} name={ingredient.name} count={ingredient.count} />
              );
            })}
            <div className="BreadBottom"></div>
          <div className='fs-4'>Стоимость: {calculateTotalCost()} KGS </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
