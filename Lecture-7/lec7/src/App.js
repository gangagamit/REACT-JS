
import './App.css';
import Card from './Component/Card';
import Data from './Component/Data';
function App() {
  return (
    <>
    <div className="App flex justify-evenly">
      {Data.map((cvalue,indx,array)=>{
        console.log(cvalue,"cvalue")
        return <Card key={indx} Name={cvalue.Name} descri={cvalue.descri} image={cvalue.image}/>
      })}
    </div>
    <div className="App flex justify-evenly">
      {Data.map((cvalue,indx,array)=>{
        console.log(cvalue,"cvalue")
        return <Card key={indx} Name={cvalue.Name} descri={cvalue.descri} image={cvalue.image}/>
      })}
    </div>
    </>
  );
}

export default App;
