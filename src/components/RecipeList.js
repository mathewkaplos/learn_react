import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList(props) {
 const {
    recipes,
    searchText } =props


  const { handleRecipeAdd } = useContext(RecipeContext)

  const  filtered_recipes = recipes.filter((r) => {
    return r.name.toLowerCase().includes(searchText);
    });

  return (
    <div className="recipe-list">
      <div>

         
        {filtered_recipes.map(recipe => {
          return (
            <Recipe key={recipe.id} {...recipe} />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}
