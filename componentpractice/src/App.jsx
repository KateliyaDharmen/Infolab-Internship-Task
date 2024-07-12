import './App.css'
import Login, { AddToCart, Logout } from './customComponent/Login'


function App() {
  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

function First() {
  return (
    <>
      <h1>This is First Component</h1>
    </>
  )
}

function Second() {
  return (
    <>
      <h1>This is Second Component</h1>
      <Login />
    </>
  )
}

function Third() {
  return (
    <>
      <h1>This is Third Component</h1>
      <Fourth />
      <Logout />
    </>
  )
}

function Fourth() {
  return (
    <>
      <h1>This is Fourth Component</h1>
    </>
  )
}

function Buttons() {
  return(
    <>
      <Login />
      <Logout />
      <AddToCart />
    </>
  )
}

export default App
export {Second, Third, Buttons};
