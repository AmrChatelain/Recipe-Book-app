import { useState } from 'react'
import recipesData from './components/recipes.json'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState(recipesData);
  

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };
  
  return (
    <>
      <Navbar />
      <Sidebar />
      <RecipeList recipes={recipes} onDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App