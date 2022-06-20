class App extends React.Component{
    constructor(){
    super()
    this.state={time:new Date()}
    }

    currentTime(){
    this.setState({
    time: new Date()
    })
    }
    
    componentWillMount(){
    setInterval(()=> this.currentTime(), 1000)
    }
    
    render(){
    const date = new Date()
    const hours = date.getHours()
    let color
    let timeOfDay
    let backgroundImage


    if (hours < 12) {
        color = "#ADFF2F"
        timeOfDay = "morning"
        backgroundImage = `url("https://i.postimg.cc/76qTMLsS/normal-Time.jpg")`
        
    } else if (hours >= 12 && hours < 17) {
        color = "#ff0000"
        timeOfDay = "afternoon"
        backgroundImage = `url("https://i.postimg.cc/KYxYCHP2/party-Time.jpg")`
        
    } else if (hours >= 17 && hours < 22) {
        color = "#00008B"
        timeOfDay = "evening"
        backgroundImage = `url("https://i.postimg.cc/MHC65P6g/cat1.jpg")`
        
    } else {
        color = "#ffffff"
        timeOfDay = "night"
        backgroundImage = `url("https://i.postimg.cc/VNZdMFtP/Cat-sleep.jpg")`
        
    }

    return(
    <div className="container" style={{ backgroundImage, color }} >
            <h1>{this.state.time.toLocaleTimeString()}</h1>
            <h2>Good {timeOfDay}..!</h2>
    </div>
    )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))