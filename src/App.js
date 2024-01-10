import { data } from "./data";
import './App.css';
import { useState } from "react";

function App() {

const [course, setCourse] = useState(0);
const { id, recipe, image, description } = data[course];
const [showMore, setShowMore] = useState(false);

const previousCourse = () => {
  setCourse((course => {
    course--;
    if (course < 0) {
      return data.length-1;
    }
    return course;
  }))
}

const nextCourse = () => {
  setCourse((course => {
    course++;
    if (course > data.length-1) {
      course = 0;
    }
    return course;
  }))
}

  return (
   <div>
   <div className="container">
      <h1>Top {data.length} Christmas recipies</h1>
    </div>
<div className="container">
      <img src={image} width="500px" alt="dish"/>
    </div>
    <div className="container" key={id}>
    <h2>{id} - {recipe}</h2>
    </div>
    <div className="container">
    <p>{ showMore ? description : description.substring(0, 200) + "..."}
    <button onClick={()=>setShowMore(!showMore)} className="btn-one">
      {showMore ? " Show less" : " Show more"}
      </button>
      </p>
    </div>
    <div className="btn">
      <button onClick={previousCourse}>BACK</button>
      <button onClick={nextCourse}>FORWARD</button>
    </div>
    </div>  
  );
}

export default App;
