
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { INGREDIENTS } from './Constants';
import Ingredient from './Components/Ingredient';

const App = () => {

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Ингредиенты</h2>
          {INGREDIENTS.map((ingredient) => (
            <Ingredient name={ingredient.name} cost={ingredient.cost} img={ingredient.img}/>
          ) )}
        </div>
        <div className="col">
          <h2>Бургер</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
