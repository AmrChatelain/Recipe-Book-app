export default function RecipesList({ items, onEdit }) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          
        >
          <span>
            {item.name} — {item.calories}
          </span>
          <button
            onClick={() => onEdit(item)}
            
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}