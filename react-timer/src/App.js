
import './App.css';

function TimerButton () {
  function handleClick() {
    alert('You clicked me!');
}
return (
  <button onClick={handleClick}>
    Click me
  </button>
);
}

function App() {
  var a = "gdag";
  const handleClick = () => {
    // implementation details
    a = "hfd";
    console.log(a);
  };
  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="TimerInput">
        <label>Seconds:</label>
        <input className="SecondsInput"type="text"></input>
        <TimerButton/>
   
      </div>
      {a}
    </div>
  );
}

export default App;
