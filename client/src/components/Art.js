import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { ImCross } from 'react-icons/im'

function Art() {

  const [art, setArt] = React.useState(null)

  // const [fullScreen, setFullScreen] = React.useState(false)
  const [pictureFull, setPitcureFull] = React.useState(null)
  const [picMargin, setPicMargin] = React.useState(0)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/arts/')
        setArt(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])

  const handleImage = (e) => {
    if (pictureFull === null) {
      const main = document.getElementById('main')
      main.classList.add('opacity')
      // console.log(window.screen.height)
      const imageWidth = window.screen.width / 100 * 75
      // console.log(imageWidth)
      const imageHeight = imageWidth / 1.3333333
      // console.log(imageHeight)
      const padding = (window.screen.height - imageHeight) / 2
      console.log(padding)
      setPicMargin(padding)
      setPitcureFull(e.target.src)
    }
  }

  const removeImage = () => {
    const main = document.getElementById('main')
    main.classList.remove('opacity')
    setPitcureFull(null)
  }

  

  return (
    <>
      {pictureFull ?
        <>
          <ImCross className="cross" onClick={removeImage}/>
          <div className="fullscreen" style={{ padding: `${picMargin}px 0px` }}>
            <img src={pictureFull} className="fullscreen-image"></img>
          </div>
        </>
        :
        <div></div>
      }
      {/* <div className="fullscreen" style={{ padding: `'${padding}'` }}>
        <img src={pictureFull} className="fullscreen-image"></img>
      </div> */}
      <div id="main">
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
        <div className="grid-wrapper">
          {art ? art.map(art => (
            <div key={art.id} className="grid-item">
              <div className="grid-photo-container">
                <img src={art.image} className="grid-photo" onClick={handleImage} value={art.image}></img>
                <p className="home-image-info">{art.name} - <span className="italic">{art.style}</span></p>
              </div>
            </div>
          ))
            :
            <div className="quote-container">
              <p className="quote">
                Loading...
              </p>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default Art