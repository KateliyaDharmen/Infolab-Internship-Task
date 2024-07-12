import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is App</h1>
    </div>
  );
}

function Msg() {
  return (
    <>
      <h1>Msg</h1>
    </>
  )
}

function New() {
  return (
    <>
      <h1>New</h1>
    </>
  )
}

function Exercise() {
  return (
    <>
      <h1>Exercise</h1>
      <Msg />
      <New />
    </>
  )
}

export default App;
export {Exercise}
