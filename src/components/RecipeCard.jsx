import { Link } from "react-router-dom";
function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="recipes-display">
      <img src={recipe.image} alt={recipe.name} width="100" />
      <Link to={`/${recipe.id}`}> 
      <h3>{recipe.name}</h3>
      </Link>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
      
      
      <p>
        Healthy Option: {recipe.calories < 300 ? '✔️' : '❌'}
      </p>
      
    
      <button onClick={() => onDelete(recipe.id)}>Delete</button>

    </div>
  );
}

export default RecipeCard;