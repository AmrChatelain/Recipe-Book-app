import { useState, useEffect } from "react";

function UpdateRecipeForm({ recipe, onUpdate, onCancel }) {
  const [name, setName] = useState(recipe.name);
  const [calories, setCalories] = useState(recipe.calories);

  useEffect(() => {
    setName(recipe.name);
    setCalories(recipe.calories);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...recipe, name, calories: Number(calories) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default UpdateRecipeForm;
