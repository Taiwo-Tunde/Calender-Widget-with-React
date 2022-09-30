import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';




function App() {

 //useState is use to update the initial state to update the DOM of the new changes
  const [date, setDate] = useState(new Date());
 

  return (
    <div className="App">
      
      <h1>Calendar Widget with React</h1>
      <div className>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          maxDate={new Date()} 
          minDate={new Date(2002, 6, 1)}
        />
      </div>
      {/* conditional rendering between single dates and range selection. The ternery operator will select the p tag to display
      based on which condition evaluted to be true. */}

      {date.length > 0 ? (
        <p >
          <span>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
