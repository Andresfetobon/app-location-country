import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Country from './components/Country';


function App() {

  const [country, setCountry] = useState()
  const [inputValue, setInputValue] = useState("deutschland")
  const [hasError, setHasError] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://restcountries.com/v3.1/name/${inputValue}`)
    .then(res => {
      setCountry(res.data[0])
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }, [inputValue])
  
  const hidenValude = e => {
    e.preventDefault()
    setInputValue(e.target.inputValue.value.trim())
    e.target.inputValue.value = ''
  }
 
  return (
    <div className='flex justify-center m-20'>
      <div>
      {
        loading ? <h2 className='text-center text-3xl font-bold'>Loading...</h2>
        :
        hasError ? <h2>This is country <span>{inputValue}</span> is not valid</h2>
        : <Country 
        country={country}
        />    
      }  
      
      <form className='m-5' onSubmit={hidenValude}>
          <input className='flex justify-center placeholder:text-slate-400 w-full border p-1 rounded bg-white'  type="text" id='inputValue' placeholder='What is your country?' />
          <button className='w-full bg-blue-300 rounded hover:bg-blue-400 px-2 mt-3'>Search</button>
      </form>
      </div> 
    </div>
  );
}

export default App;
