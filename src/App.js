//import logo from './logo.svg';
import myPro from './1234.jpg';
import Student from './component/student';
import './App.css';
import Header from './component/headers';
import ReactState from './component/ReactState';
import FormText from './component/FormText';
import RadioForm from'./component/RadioForm';
import MultiCheckBox from './component/MultiCheckBox';
function App() {
  return (
    <>
      <Header/>
      <Student name='Surachai Laksanawilas' no='13' section='Digital Business Technology' pic={myPro}/>;
      <ReactState/>
      <FormText/>
      <RadioForm/>
      <MultiCheckBox/>
    </>
  );
}

export default App;