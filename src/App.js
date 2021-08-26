import React, {useState} from 'react';
import { AddCat } from './components/AddCat';

const App = () => {
  const [categories, setCategories] = useState(['One Piece', 'Death Note', 'Bleach'])

  // const handleAdd = () => {
  //   //Mutar
  //   // return setCategories(categories.concat('Hola'))
  //   return setCategories([...categories, 'Hunter'])
  // }

  return (
    <>
      <h2>GiffExpertApp</h2>
      <AddCat setCategories={ setCategories }/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map(cat => {
          return <li> {cat} </li>
        })}
      </ol>
    </>
  );
}

export default App;
