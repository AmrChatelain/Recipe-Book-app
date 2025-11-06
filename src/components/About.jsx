import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <h2>Welcome to my Project for recipes</h2>
      <p>
        Welcome to My Recipes! Discover delicious meals made easy
        complete with calorie counts, nutrition facts, and clear info on whether a dish is light or indulgent.
        Eat smart, cook tasty, and find the perfect balance between healthy and flavorful food.
      </p>
      <div className="about-links">
        <a 
          href="https://github.com/AmrChatelain" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Made By Amr Chatelain
        </a>
        <Link to="/">← Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default About;