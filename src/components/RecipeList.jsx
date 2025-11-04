import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onDelete }) {
  return (
    <div>
      <h1>Recipe Book</h1>
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default RecipeList;