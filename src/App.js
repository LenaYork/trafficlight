import './App.css';
import { Circle } from './components/Circle/Circle';

function App() {
    return (
        <div className='app'>
            <h1 className="app-title">Traffic Light</h1>
            <div className="circles">
                <Circle 
                    color="red"
                    id={1}

                />
                <Circle 
                    color="yellow"
                    id={2}

                />
                <Circle 
                    color="green"
                    id={3}

                />
            </div>
            
        </div>
    );
}

export default App;
