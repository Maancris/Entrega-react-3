import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ResidentInfo from './componente/ResidentInfo';


function App() {
  const mathran = Math.floor(Math.random() * 126) + 1
  const [news, setNews] = useState('')

  const [inp, setInp] = useState({});
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${mathran}`)
      .then(res => setInp(res.data))
  }, [])
  console.log(inp)

  const boton = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${news}`)
      .then(res => setInp(res.data))
  }

  return (
    <>
      <div className='imgup'>
        <h2 className='myName'>Cristián Narvaez</h2>
        <div className='inputid'>
          <input className='inpularge' type="text" placeholder='id here' value={news} onChange={e => setNews(e.target.value)} />
          <button onClick={boton} className='buttonserch'>Serch</button>
        </div>
      </div>

      <h1>{inp.name}</h1>

      <div className='aditional'>
        <div className='headone'>
          Type : <b>{inp.type}</b>
        </div>
        <div className='headtwo'>
          Dimension : <b>{inp.dimension}</b>
        </div>
        <div className='headtree'>
          Redisdents : <b>{inp.residents?.length}</b>
        </div>
      </div>

      <div className='dad'>
        {

          inp.residents?.map(send => (
            <ResidentInfo url={send}
              key={send} />
          ))
        }

      </div>
    </>
  )
}

export default App
