import { useState } from 'react'
import recipesData from '../components/recipes.json'
import RecipeCard from '../components/RecipeCard'
import AddRecipeForm from '../components/AddRecipeForm'
import UpdateRecipeForm from '../components/UpdateRecipeForm'
import RecipesList from './RecipesList'


function DashboardPage() {
  const [recipes, setRecipes] = useState(recipesData);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleAdd = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleUpdate = (updatedRecipe) => {
    setRecipes(recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r)));
    setEditingRecipe(null);
  };

  return (
    <div>
      <h1>Recipe Book Dashboard</h1>

      
      <AddRecipeForm onAdd={handleAdd} />

      
      {editingRecipe && (
        <UpdateRecipeForm
          recipe={editingRecipe}
          onUpdate={handleUpdate}
          onCancel={() => setEditingRecipe(null)}
        />
      )}

      
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={handleDelete}
          onEdit={() => setEditingRecipe(recipe)}
        />
      ))}
    </div>
  );
}

export default DashboardPage;