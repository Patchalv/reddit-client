import React from "react";
import './App.css';
import NavBar from '../features/components/navBar/NavBar';
import Posts from '../features/components/posts/Posts';
import Subreddits from "../features/components/subreddits/Subreddits";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <main>
          <Posts />
        </main>
        <aside>
          <Subreddits />
        </aside>
      </div>
    </div>
  )
}

export default App;
