import { createContext, useState } from "react";

export const pomoContext = createContext()

const PomoContextProvider = (props) => {
    const [changeMode, setChangeMode] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('Mode On')
    const [start, setStart] = useState(false)

    const switchModeHandler = () => {
        // setChangeMode(prev => !prev)
        // setStart(prev => !prev)
        console.log("first")
    }

  console.log(changeMode)

    return(
        <pomoContext.Provider value={{changeMode, setChangeMode, displayMessage, setDisplayMessage, start, setStart, switchModeHandler}}>
            {props.children}
        </pomoContext.Provider>
    )
}

export default PomoContextProvider