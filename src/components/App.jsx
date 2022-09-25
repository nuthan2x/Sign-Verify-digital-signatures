
import '../css/App.css';
import Footer from './footer';
import Nav from './navbar';
import Sign from './sign_msg';
import Verify from './verify_msg';


function App() {


  
  return (
    <div className="App">
      <Nav />

      <div className='Appbody'>
          <Sign />
          <Verify />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
