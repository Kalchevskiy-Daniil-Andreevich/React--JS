import React from "react";
import "./App.css";
import Calendar from "./components/calendar";

class App extends React.Component {
     state = {
          date: null,
     };

     handleDateChange = (date) => this.setState({ date });
     render() {
          const { date } = this.state;
          return (
               <div className='App'>
                    {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}
                    <Calendar onChange={this.handleDateChange} />
               </div>
          );
     }
}

export default App;
