import Test from "./Test";
function Main(props){
   
    return(
        <div className="main-wapper">
            <h1>Main site area {props.test}</h1>
            <Test data={props.test}/>
        </div>
    )
}
export default Main;