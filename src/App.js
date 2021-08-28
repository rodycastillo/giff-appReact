import React, {useState} from 'react';
import { AddCat } from './components/AddCat';
import { GridElement } from './components/GridElement';

const App = () => {
  const [categories, setCategories] = useState(['Dragon Ball'])

  // const handleAdd = () => {
  //   //Mutar
  //   // return setCategories(categories.concat('Hola'))
  //   return setCategories([...categories, 'Hunter'])
  // }

  return (
    <>
      <h2>GiffsApp</h2>
      <AddCat setCategories={ setCategories }/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map(cat => (
           <GridElement key={ cat } category={ cat } />
        )
      )}
      </ol>
    </>
  );
}

export default App;
