import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'


import ActivityIntroPage from "../../routes/ActivityIntroPage/ActivityIntroPage"
import ActivityPage from "../../routes/ActivityPage/ActivityPage";
import ResultsPage from "../../routes/ResultsPage/ResultsPage";
import JungleIntroPage from "../../routes/JungleIntroPage/JungleIntroPage";


function App() {
  //We are setting this state at the top level so it can be drilled down to both the activity and the results page
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [mismatch , setMismatch] = useState(0);
  const [percentageState , setPercentageState] = useState(0);
  const [childName, setChildName] = useState();


  

//  async function getDataChild() {
//     let response = await fetch("https://fullstack-family.herokuapp.com/child");
//     let data = await response.json();
//     setchildData(data)
//   }

//   useEffect(() => {
// getDataChild();
// }, []);


  return (
    <div className="App">
    
      {/* <h1> Welcome to Jungle Sums! </h1> */}
      {/* <LoginButton /> */}
     
      <Routes>

      <Route path="/" element={
          <JungleIntroPage score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks} mismatch={mismatch} setMismatch={setMismatch}/>} />
        
        <Route path="activity-intro" element={
          <ActivityIntroPage score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks} mismatch={mismatch} setMismatch={setMismatch}/>} />

        <Route path="activity" element={
          <ActivityPage score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks} percentageState = {percentageState} setPercentageState = {setPercentageState} mismatch={mismatch} setMismatch={setMismatch}/>} />
          
        <Route path="results" element={
      
          <ResultsPage score= {score} clicks = {clicks} percentageState = {percentageState} setPercentageState = {setPercentageState} mismatch={mismatch} setMismatch={setMismatch} childName = {childName} setChildName = {setChildName} />} />

      </Routes>
      
    </div>
  );
}

export default App;
