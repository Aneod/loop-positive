import './App.css';
import Menu from './features/menu/Menu';
import { useState } from 'react';
import Program from './features/program/Program';
import Library from './features/library/library';
import Stopwatch from './features/stopwatch/Stopwatch';
import BackArrow from './back-arrow.png'

function App() {

  const [page, setPage] = useState('Menu')

  const modifiePageColor = () => {
    switch (page) {
      case 'Menu':
        return 'white' 

      case 'Program':
        return 'red'

      case 'Library':
        return 'blue'

      case 'Stopwatch':
        return 'orange'

      default:
        return 'white'
    }
  }

  const modifiePageTitle = () => {
    switch (page) {
      case 'Menu': return 'Loop Positive by Blys'
      case 'Program': return 'Create your program'
      case 'Library': return 'See all exercices'
      case 'Stopwatch': return 'Time to gym'
      default: return 'white'
    }
  }

  const whichPage = () => {
    switch (page) {
      case 'Menu':
        return <Menu
            clickProgram = {() => setPage('Program')}
            clickLibrary = {() => setPage('Library')}
            clickStopwatch = {() => setPage('Stopwatch')}
          />

      case 'Program':
        return <Program/>

      case 'Library':
        return <Library/>

      case 'Stopwatch':
        return <Stopwatch/>

      default:
        return <Menu
            clickProgram = {() => setPage('blue')}
            clickLibrary = {() => setPage('green')}
            clickStopwatch = {() => setPage('orange')}
          />
    }
  }
  
  return (
    
    <div className="App">
      <div className='leftSide'>
        <div className='topLeftSide' style={{backgroundColor: modifiePageColor()}}></div>
        <div className='BottomLeftSide'>
          <h2>{modifiePageTitle()}</h2>
        </div>
      </div>

      <div className='rightSide'>
      <div className='topRightSide'>
        <h1>{page}</h1>
      </div>
      <div className='BottomRightSide'>
        <div className='menuAndTitle'>
          <button className='buttonMenu'onClick={() => setPage('Menu')}>
            <img src={BackArrow} alt="Retour"/>
          </button>
          <h2>Loop Positive<br/>by Blys Boutique</h2>
        </div>
        <div className='page'>
          {whichPage()}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;