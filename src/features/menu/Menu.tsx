import React from "react"
import './Menu.css'

type Props = {
    clickProgram: () => void
    clickLibrary: () => void
    clickStopwatch: () => void
}

const Menu: React.FC<Props> = ({clickProgram, clickLibrary, clickStopwatch}) => {
    return <div className="Menu">
        <button onClick={clickProgram}>Program</button>
        <button onClick={clickLibrary}>Library</button>
        <button onClick={clickStopwatch}>Stopwatch</button>
    </div>
}

export default Menu