import { useState } from "react";

function AddItemForm({onAdd}){
 const [name, setName] = useState("");
 const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, calories: Number(calories) });
    setName("");
    setCalories("");
  };
    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        
      />
      <button type="submit" >
        Add
      </button>
    </form>
  );

}


export default  AddItemForm 