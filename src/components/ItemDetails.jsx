import { useParams } from 'react-router-dom';
import Recipes from './recipes.json'

function ItemDetails(){
     const { recipesId } = useParams();
     

    return(
        <>
        Recipes {recipesId}
    </>
    )
};

export default ItemDetails