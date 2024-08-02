import React from "react";
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import "./App.css";
import { content } from "./assets/db/db";
import { Greetings } from "./components/greetings/Greetings";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>start page</div>} />;

          {content.map(item => {
            return <Route key={item.id} path={item.route} element={<Greetings header={item.header} background={item.background} text={item.text} />} />
          })}

          <Route path="*" element={<div>error page</div>} />;
        </Routes>
      </Router>
    </div>
  );
}


export default App;
