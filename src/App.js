import './App.css';
import { useEffect } from 'react';
function App() {

  const fetchAll =  async()=>{
    try {

      const response = await fetch('http://localhost:3000/api/v1/products')
      const objects = await response.json();

      console.log(objects)
      
    } catch (error) {
      console.log(`Error:${error}`)
    }

  }

  
  useEffect(()=>{
   fetchAll();
  },[])


  return (
    <div className="App">
      hi i am working
    </div>
  );
}

export default App;
