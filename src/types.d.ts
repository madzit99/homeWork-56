export interface Ingredient {
    name: string;
    cost: number;
    img: string;
}; 

export interface IngredientProps {
    name: string;
    cost:number;
    img:string;
    // total:number;
    onAdd: () => void;
    onDelete: () => void;
}; 

export interface StateIngredient {
    name:string;
    count:number;
};
