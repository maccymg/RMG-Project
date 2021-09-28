import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {

  const [homeArt, setHomeArt] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/arts/')
        setHomeArt(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])

  const filteredHome = homeArt ? homeArt.filter(art => {
    if (art.types.includes(3)) {
      return art
    }
  }) : null

  return (
    <>
      <div className="header-container">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <h1 className="header">Lockdown Landscapes</h1>
        </Link>
        {/* <div className="fa fa-bars" style={{ fontSize: '46px' }}></div> */}
      </div>
      <div className="quote-container">
        <q className="quote">
        Guide manners come by copying ye fairest things
        </q>
        <p className="author">Inigo Jones</p>
      </div>
      <div>
        {homeArt ? filteredHome.map(art => (
          <div key={art.id}>
            <img src={art.image}></img>
            <p>{art.name}</p>
            <p>{art.style}</p>
          </div>
        ))
          :
          <div></div>
        }
      </div>
    </>
  )
}

export default Home
