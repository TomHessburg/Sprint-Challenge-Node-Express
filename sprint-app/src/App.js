import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = props => {

  const [projects, setProjects] = useState([]);
  const [currentDetauls, setCurrentDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/project/")
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => console.log(err))
  } ,[])



  return (
    <div className="App">
      {projects.length ? projects.map(proj => {
        console.log(proj.id);
        return <div className="project" key={proj.id}>
          <h2>{proj.name}</h2>
          <button
          
            onClick={() => {
              axios.get(`http://localhost:5000/api/project/actions/${proj.id}`)
                .then(res => setCurrentDetails(res.data))
                .catch(err => console.log(err))
            }}
          >show actions</button>
        </div>
      }) : null}
      {currentDetauls.length ? currentDetauls.map(det => {
        console.log(det)
            return <div style={{border: "1px solid black", width: "40%", margin: "10px auto", background: "gray"}} key={det.id}>
              <p>{det.description}</p>
              <h5>{det.notes}</h5>
            </div>
          }) : null}
    </div>
  );
}

export default App;
