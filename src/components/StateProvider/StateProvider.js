import React, { createContext, useEffect, useState } from 'react'

export const StateContext = createContext()

export default function StateProvider({ children }) {

    const [workTime, setWorkTime] = useState(25 * 60)
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60)
    const [longBreakTime, setLongBreakTime] = useState(30 * 60)

    const [initialState, setInitialState] = useState(0)

    const [activePreset, setActivePreset] = useState(0)
    const [progress, setProgress] = useState(55)
    const [timer, setTimer] = useState(100);
    const [active, setActive] = useState(false);

    useEffect(() => {

        switch (activePreset) {
            case 0:
                setTimer(workTime);
                setInitialState(workTime);
                setActive(false)
                break;
            case 1:
                setTimer(shortBreakTime);
                setInitialState(shortBreakTime);
                setActive(false)
                break;
            case 2:
                setTimer(longBreakTime);
                setInitialState(longBreakTime);
                setActive(false)
                break;
            default:
                break;
        }

    }, [activePreset, workTime, shortBreakTime, longBreakTime])

    return <StateContext.Provider
        value={{
            activePreset,
            setActivePreset,
            progress,
            setProgress,
            timer,
            setTimer,
            active,
            setActive,
            initialState,
            setInitialState,
            shortBreakTime,
            setShortBreakTime,
            longBreakTime,
            setLongBreakTime,
            workTime,
            setWorkTime
        }}>
        {children}
    </StateContext.Provider>
}
