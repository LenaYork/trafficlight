import "./Circle.css";

export function Circle({color, id, timeLeft, activeCircle}) {

    const isActive = activeCircle === id;

    const currentClass = isActive ? color : "notActiveCircle";
    
    return(
        <div 
            className={`circle ${currentClass}`}
            id={id}
        >
            <span>{isActive && timeLeft}</span>
        </div>
    )
}