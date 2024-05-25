import './App.css'
import Card from '../Components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Tailwind Test</h1>
      
      <Card username="Muhammad Shakir" btnText="Click Me" /> 
      <Card username="Rehan Sattar" btnText = ""/> 
    </>
  )
}

export default App
