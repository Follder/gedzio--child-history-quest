import React from "react";
import { HashRouter as Router, Routes, Route }  from "react-router-dom";
import "./App.css";
import { content } from "./assets/db/db";
import { Greetings } from "./components/greetings/Greetings";
import { HomePage } from "./components/homePage/HomePage";
import { Page404 } from "./components/page404/Page404";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />;

          {content.map(item => {
            return <Route key={item.id} path={item.route} element={<Greetings header={item.header} background={item.background} text={item.text} />} />
          })}

          <Route path="*" element={<Page404 />} />;
        </Routes>
      </Router>
    </div>
  );
}


export default App;
