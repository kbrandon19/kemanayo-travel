import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './index.css';
import App from './App';

import Trips from "./Routes/trips";
import Events from "./Routes/events";
import Rentals from "./Routes/rentals";
import Blog from "./Routes/blog";
import DefaultPost from './Components/Sanity/DefaultPost';
import AllPosts from './Components/Sanity/AllPosts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



<BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/trips" element={<Trips/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/rentals" element={<Rentals/>}/>

    {/* Routes for blog section*/}
    <Route path="/blog" element={<AllPosts/>} exact/>
    <Route path="/:slug" element={<DefaultPost/>} />
    <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes>
</BrowserRouter>
);


