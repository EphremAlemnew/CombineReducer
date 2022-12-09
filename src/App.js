import './App.css';
import {useState} from 'react'
import {useDispatch,useSelector,} from 'react-redux'
import { age, gender, lname, name, profession } from './store/action/action';



function App() {
  const dispatch = useDispatch()
  const [u,setu]=useState({ufname:'',ulname:'',uAge:'',uGender:'',uProfession:''})
 


  const fname=useSelector((state)=>state.firstName)
  const Slname=useSelector((state)=>state.lastName)
  const Sage=useSelector((state)=>state.age)
  const Sgender=useSelector((state)=>state.gender)
  const Sprofession=useSelector((state)=>state.profession)
  return (
    <div className="App">
      <div className='container shadow-lg p-3  mb-5 rounded '>
        <div className='h1'>Combined reducers</div>
         <div className="input-group mb-2">
             <span class="input-group-text" id="basic-addon1">FIRST NAME</span>
             <input value={u.ufname} onChange={(e)=>setu({ufname:e.target.value})} type="text" className="form-control" placeholder="First name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(name(u.ufname))} className='btn btn-primary' id="basic-addon2">OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">LAST NAME</span>
             <input value={u.ulname} onChange={(e)=>setu({ulname: e.target.value})}type="text" className="form-control" placeholder="Last name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(lname(u.ulname))} className='btn btn-primary' id="basic-addon2">OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">AGE</span>
             <input value={u.uAge} onChange={(e)=>setu({ uAge: e.target.value})} type="number" className="form-control" placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(age(u.uAge))}  id="basic-addon2" className='btn btn-primary'>OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">GENDER</span>
             <input value={u.uGender} onChange={(e)=>setu({uGender: e.target.value})} type="text" className="form-control" placeholder="Gender" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(gender(u.uGender))}  className='btn btn-primary'id="basic-addon2">OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">PROFESSION</span>
             <input value={u.uProfession} onChange={(e)=>setu({uProfession: e.target.value})} type="text" className="form-control" placeholder="Proffesion" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(profession(u.uProfession))} className='btn btn-primary' id="basic-addon2">OK</button>
         </div>
         <h2 className='h2'>Result</h2>
         <div className='txt'>First Name: {fname}</div>
      <div className='txt'>Last Name: {Slname}</div>
      <div className='txt'>Age: {Sage}</div>
      <div className='txt'>Gender: {Sgender}</div>
      <div className='txt'>Profession: {Sprofession}</div>
      </div>
      
    </div>
  );
}

export default App;
