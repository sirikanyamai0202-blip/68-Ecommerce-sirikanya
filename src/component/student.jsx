import myPro from '../123.jpg';
import'./student-css.css';

function Student(props){
  const myStyle = {
    color: 'purple',
    backgroundColor : '#FFFFFF'
  };
  return (
    <div>
      <h3 className='stname'> Student name : {props.name}</h3>
      <h3>Student No. :{props.no}</h3>
      <h3>Section : {props.section}</h3>
      <img src={myPro} alt="Profile" style={{width : '100px',height:"100px"}}/>
    </div>
  );
}
export default Student;