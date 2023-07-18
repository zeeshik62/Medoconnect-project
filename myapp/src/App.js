// import Bulb from "./components/bulb";
// import App1 from './components/bulb'
import Login from "./pages/Login";
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";
import Counter from "./components/Counter";
import Todoform from "./components/Todoform";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import EditTodo from "./components/EditTodo";
function App() {
  const [num,setNum]=useState(50);
  const [marks,setMarks]=useState([25,32,25,36]);

  return (
    <div className="container">
     {/* <Bulb/> */}
     {/* <Header/>
     <Main test={num}/>
        {marks.map((m)=><p>{m}</p>)}
        <Counter/> */}

        
        <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        {/* <Route path='/todo' element={<Todoform/>}></Route>
          <Route path='/editTodo/:id' element={<EditTodo/>}></Route> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
