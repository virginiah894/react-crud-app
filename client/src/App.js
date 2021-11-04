import './App.css';

function App() {
  return (
  <div className ='App'>
    <h1>MOVIE REVIEW APP</h1>
    <div className="form">
      <label>Movie Name</label>  
      <input type ='text' name ="movieName"/>
      <label>Movie Review</label>
    <input type ='text' name ="movieReview"/>
    <button>Submit</button>
    </div>

   </div>
  );
  
}

export default App;
