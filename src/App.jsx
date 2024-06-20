import { useEffect, useState } from "react"
import { Guitar } from "./components/Guitar"
import { Header } from "./components/Header"
import { db } from "./data/db"


function App() {
  const[data,setData] = useState(db)
  const [cart, setCart] = useState([])

  function addToCart(item) {
    const itemExist = cart.findIndex(guitar=>guitar.id=== item.id)
    if(itemExist>=0){
      const updateCart = [...cart]
      updateCart[itemExist].quality++
      setCart(updateCart)
    }else{
     item.quality = 1
      setCart([...cart,item])
    }
  }
  // useEffect(()=>{
  //   setData(db)
  // }, [])
  function removeFromCart(id) {
    setCart(prevCart=>prevCart.filter(guitar=>guitar.id !==id))
  }
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
      />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
       {data.map((guitar)=>(
        <Guitar
         key={guitar.id}
          guitar={guitar}
          setCart={setCart}
          cart={cart}
          addToCart={addToCart}
        />
      ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
