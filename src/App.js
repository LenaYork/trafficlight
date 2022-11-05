import './App.css';
import { Circle } from './components/Circle/Circle';
import { useState, useEffect } from 'react';

function App() {
    const [ activeCircle, setActiveCircle ] = useState(1);
    const [ timeLeft, setTimeLeft ] = useState(10);

    useEffect( () => {
        let newTimer;
        if (activeCircle === 1) {
            newTimer =  10
        } else if (activeCircle === 3) {
            newTimer =  15
        } else { 
            newTimer = 3
        }
        setTimeLeft(newTimer)
    }, [activeCircle] )

    useEffect(() => {
        const changeSeconds = setInterval( () => {
            if (timeLeft !== 0) {
                setTimeLeft(timeLeft - 1)
            }
        }, 1000)

        return () => {
            clearInterval(changeSeconds);
        } 
    }, [timeLeft])

    return (
        <div className='app'>
            <h1 className="app-title">Traffic Light</h1>
            <div className="circles">
                <Circle 
                    color="red"
                    id={1}
                    activeCircle={activeCircle}
                    timeLeft={timeLeft}
                />
                <Circle 
                    color="yellow"
                    id={2}
                    activeCircle={activeCircle}
                    timeLeft={timeLeft}
                />
                <Circle 
                    color="green"
                    id={3}
                    activeCircle={activeCircle}
                    timeLeft={timeLeft}
                />
            </div>
            
        </div>
    );
}

export default App;
