import recipesData from './data/recipes.json'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState(recipesData);
  
  return (
    <>
    <recipesData />
    <Navbar />
     <Sidebar />
     <Footer />
     </>
  );
}

export default App
