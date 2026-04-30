import { Route, Routes } from 'react-router'
import { Homepage } from './pages/Homepage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'
import { TrackingPage } from './pages/TrackingPage'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/api/cart-items?expand=product')
      .then((response) =>
        response.json()).then((data) => {
          setCart(data);
        });
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<Homepage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />


      </Routes>

    </>
  )
}

export default App
