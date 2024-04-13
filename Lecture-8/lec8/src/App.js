
import './App.css';
import DestrucProps from './Component/DestrucProps';
import img1 from './Image/Image-1.jpg';
import img2 from './Image/image-2.jpg';
import img3 from './Image/Image-3.jpg';
function App() {
  return (
    <div className="App">
        <DestrucProps img = {img1} name="John Doe" descr="Heading must have content and the content must be accessible by a reader"/>
        <DestrucProps img = {img2} name="John Doe" descr="Heading must have content and the content must be accessible by a reader"/>
        <DestrucProps img = {img3} name="John Doe" descr="Heading must have content and the content must be accessible by a reader"/>
    </div>
  );
}

export default App;
