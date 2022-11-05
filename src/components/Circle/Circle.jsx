import "./Circle.css";

export function Circle({color, id}) {
    
    return(
        <div 
            className={color}
            id={id}
        >
            <span>timeleft</span>
        </div>
    )
}