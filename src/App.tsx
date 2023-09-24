import './App.css';
import { useState } from 'react';
import BackArrow from './back-arrow.png'
import House from './house.png'
import imgTest from './imgTest.webp'

function App() {

  const [lastPage, setLastPage] = useState(() => () => console.log())
  const [pageColor, setPageColor] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const [sideText, setSideText] = useState('')
  const [pageContent, setPageContent] = useState(<div/>)

  const Menu = () => setPage(
    () => Menu,
    'Menu',
    'Loop Positive by Blys',
    'white',
    <div>
      <button onClick={() => ProgramMenu()}>Program</button>
      <button onClick={() => LibraryMenu()}>Library</button>
      <button onClick={() => StopwatchMenu()}>Stopwatch</button>
    </div>
  )

  const ProgramMenu = () => setPage(
    () => Menu,
    'Program',
    'Make your dream body',
    'red',
    <div>

    </div>
  )

  const LibraryMenu = () => setPage(
    () => Menu,
    'Library',
    'See all exercices',
    'blue',
    <div>
      <button onClick={() => PectorauxMenu()}>Pectoraux</button>
    </div>
  )

  const PectorauxMenu = () => setPage(
    () => LibraryMenu,
    'Library',
    'See all exercices',
    'blue',
    <div>
      <button onClick={() => DeveloppeVariantes()}>Variantes du développé</button>
      <button onClick={() => PompesVariantes()}>Variantes des pompes</button>
    </div>
  )

  const DeveloppeVariantes = () => setPage(
    () => PectorauxMenu,
    'Library',
    'See all exercices',
    'blue',
    <div>
      <button onClick={() => DeveloppeCouche()}>Développé couché</button>
    </div>
  )

  const DeveloppeCouche = () => setPage(
    () => DeveloppeVariantes,
    'Library',
    'See all exercices',
    'blue',
    <div>
      <h1>Développé couché</h1>
      <p>Ceci est l'exercice de musculation le plus célèbre et pourtant j'y suis très mauvais.</p>
      <img src={imgTest} alt="Illustration"/>
      <p>Point important:</p>
      <br />
      <ol>
        <li>Bras à 30°, pas à l'horizontal</li>
        <li>Garder les bras à largeur d'épaule</li>
        <li>Omoplates collées</li>
      </ol>
      
      <br />
    </div>
  )

  const PompesVariantes = () => setPage(
    () => PectorauxMenu,
    'Library',
    'See all exercices',
    'blue',
    <div>

    </div>
  )

  const StopwatchMenu = () => setPage(
    () => Menu,
    'Stopwatch',
    'Timee to gym',
    'orange',
    <div>
      
    </div>
  )

  const setPage = (lastPage: () => void, title: string, sideText: string, color: string, JSX: JSX.Element) => {
    setLastPage(lastPage)
    setPageTitle(title)
    setSideText(sideText)
    setPageColor(color)
    setPageContent(JSX)
  }

  if(!pageColor) Menu()
  
  return (
    <div className="App">
      <div className='colorContainer' style={{backgroundColor: pageColor}}></div>
      <div className='titleContainer'><h1>{pageTitle}</h1></div>
      <div className='textContainer'><h2>{sideText}</h2></div>
      <div className='contentContainer'>
        <div className='backer'>
          <button className='buttonBacker' onClick={() => lastPage()}>
            <img src={BackArrow} alt="Retour"/>
          </button>
          <h2>Loop Positive<br/>by Blys Boutique</h2>
          <button className='buttonBacker buttonMenu' onClick={() => Menu()}>
            <img src={House} alt="Menu"/>
          </button>
        </div>
        <div className='content'>{pageContent}</div>
      </div>
    </div>
  );
}

export default App;