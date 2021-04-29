
import './App.css';
import BirdSight from './birdSight';
import { co } from './co';
import Table from './table';
import { coo } from './coo';
function creatable(co){
  return (
    <Table
      id={co.id}
      name={co.name}
      lastName={co.lastName}
      start={co.start}
      dob={co.dob}
    />
  )
}

function sight(coo){
  return (
    <BirdSight
      id={coo.id}
      name={coo.name}
      lastName={coo.lastName}
      start={coo.role}
    />
  )
}



function App() {
  return (
    <div className="App" >
      {co.map(creatable)}
      {coo.map(sight)}
    </div>
  );
}

export default App;
