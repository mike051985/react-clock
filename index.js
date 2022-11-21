// Variable
const { useState, useEffect } = React;

// app component
function App () {

    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [date, setDate] = useState("date");

    useEffect(
        () => {
            const intervalId= setInterval(()=>{
                let d=new Date();
                var h=d.getHours().toString();
                var m=d.getMinutes().toString();
                var s=d.getSeconds().toString();
                var z=d.getDate().toString()+" / "
                    +(d.getMonth()+1).toString()+" / "
                    +d.getFullYear();
        
                setDate(z);
                setHours(h.padStart(2,'0'));
                setMinutes(m.padStart(2,'0'));
                setSeconds(s.padStart(2,'0'));
            
                return () => clearInterval(intervalId); 
                },1000);
            },[seconds,minutes,hours,date]);
        
    
    return (
        <div>
            <h1>Digital Clock</h1>
            <hr/>
            <h1 className="date">{date}</h1>
            <h1 className="glow">
                {hours}
                :{minutes}
                :{seconds}
            </h1>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);