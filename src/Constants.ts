import meatImg from '../assets/Meat.png';
import CheeseImg from '../assets/Cheese.png';
import SaladImg from '../assets/Salad.png';
import BeconImg from '../assets/Becon.png';
import { Ingredient } from './types';

export const INGREDIENTS: Ingredient[] = [
    {name:'Meat', cost:80, img:meatImg},
    {name:'Cheese', cost:50, img:CheeseImg},
    {name:'Salad', cost:10, img:SaladImg},
    {name:'Becon', cost:60, img:BeconImg},
];