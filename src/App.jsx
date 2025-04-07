import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FuntionalComponent from './components/functional-components'
import ProductList from './components/products'

const DummyProductData=["Product 5", "Product 6" , "Product 4"];
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1> Welcome to React- Vite App Dev</h1>
      <ClassBasedComponent/>
      <FuntionalComponent/>
      {/* <ProductList ListofProducts={DummyProductData} name= " Roxy" city = "ABC" /> */}



    </>
  )
}


export default App
