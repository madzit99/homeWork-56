import meatImg from '../src/assets/Meat.png';
import CheeseImg from '../src/assets/Cheese.png';
import SaladImg from '../src/assets/Salad.png';
import BeconImg from '../src/assets/Becon.png';
import { Ingredient } from './types';

export const INGREDIENTS: Ingredient[] = [
    {name:'Meat', cost:80, img:meatImg},
    {name:'Cheese', cost:50, img:CheeseImg},
    {name:'Salad', cost:10, img:SaladImg},
    {name:'Becon', cost:60, img:BeconImg},
];