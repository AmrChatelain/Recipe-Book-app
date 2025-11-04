import { useState } from 'react'
import recipesData from './recipes.json'
import RecipeCard from '../components/RecipeCard'

function DashboardPage() {
  const [recipes, setRecipes] = useState(recipesData);
  
  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };
  
  return (
    <div>
      <h1>Recipe Book Dashboard</h1>
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default DashboardPage;