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
        <h1 className="header">Lockdown Landscapes</h1>
        <div className="nav">
          <Link to="/art" style={{ textDecoration: 'none', color: 'black' }}>
            <p className="nav-item n-i-left">Paintings</p>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <p className="nav-item">Home</p>
          </Link>
        </div>
      </div>
      <div className="home-container">
        {homeArt ? filteredHome.map(art => (
          <div className="home-key" key={art.id}>
            <div className="spacing-container">
              <div className="black"></div>
              <div className="home-image-container">
                <img src={art.image} className="home-image"></img>
              </div>
              <div className="black"></div>
            </div>
            <div className="home-image-info-container">
              <p className="home-image-info">{art.name} - <span className="italic">{art.style}</span></p>
            </div>
          </div>
        ))
          :
          <div className="home-container-wait"></div>
        }
      </div>
      <div className="quote-container">
        <q className="quote">
        Guide manners come by copying ye fairest things
        </q>
        <p className="author">Inigo Jones</p>
      </div>
    </>
  )
}

export default Home
