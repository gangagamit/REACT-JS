
import './App.css';
// import Props from './Component/Props';
import Card from './Component/Card';
import image1 from './Image/Image-1.jpg';
import image2 from './Image/image-2.jpg';
import image3 from './Image/Image-3.jpg';
function App() {
  return (
    <>
    <div className="App  flex justify-evenly mt-10">
      {/* <Props title="Props" description="Props pass a data from one component to another component as attribute"/> */}
      <Card image={image1} title="Card" descri="Props pass a data from one component to another component as attribute"/>
      <Card image={image2} title="Card" descri="Props pass a data from one component to another component as attribute"/>
      <Card image={image3} title="Card" descri="Props pass a data from one component to another component as attribute"/>
    </div>
     <div className="App  flex justify-evenly mt-10">
     {/* <Props title="Props" description="Props pass a data from one component to another component as attribute"/> */}
     <Card image={image1} title="Card" descri="Props pass a data from one component to another component as attribute"/>
     <Card image={image2} title="Card" descri="Props pass a data from one component to another component as attribute"/>
     <Card image={image3} title="Card" descri="Props pass a data from one component to another component as attribute"/>
   </div>
    </>
  );
}

export default App;
