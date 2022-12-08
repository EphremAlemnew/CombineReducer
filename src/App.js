import './App.css';
import {useState} from 'react'
import {useDispatch,useSelector,} from 'react-redux'
import { age, gender, lname, name, profession } from './store/action/action';



function App() {
  const dispatch = useDispatch()
  const [ufname,setufname]=useState()
  const [ulname,setulname]=useState()
  const [uAge,setuAge]=useState()
  const [uGender,setuGender]=useState()
  const [uProfession,setuProfession]=useState()


  const fname=useSelector((state)=>state.firstName)
  const Slname=useSelector((state)=>state.lastName)
  const Sage=useSelector((state)=>state.age)
  const Sgender=useSelector((state)=>state.gender)
  const Sprofession=useSelector((state)=>state.profession)
  return (
    <div className="App">
      <div className='container shadow-lg p-3  mb-5 rounded bg-red'>
        <h2>Combined reducers Example</h2>
         <div className="input-group mb-2">
             <span class="input-group-text" id="basic-addon1">FIRST NAME</span>
             <input value={ufname} onChange={(e)=>setufname(e.target.value)} type="text" className="form-control" placeholder="First name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(name(ufname))} className='btn btn-primary' id="basic-addon2">OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">LAST NAME</span>
             <input value={ulname} onChange={(e)=>setulname(e.target.value)}type="text" className="form-control" placeholder="Last name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(lname(ulname))} className='btn btn-primary' id="basic-addon2">OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">AGE NAME</span>
             <input value={uAge} onChange={(e)=>setuAge(e.target.value)} type="text" className="form-control" placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(age(uAge))}  id="basic-addon2" className='btn btn-primary'>OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">GENDER</span>
             <input value={uGender} onChange={(e)=>setuGender(e.target.value)} type="text" className="form-control" placeholder="Gender" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(gender(uGender))}  className='btn btn-primary'id="basic-addon2">OK</button>
             
         </div>
         <div className="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">PROFESSION</span>
             <input value={uProfession} onChange={(e)=>setuProfession(e.target.value)} type="text" className="form-control" placeholder="Proffesion" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <button onClick={()=>dispatch(profession(uProfession))} className='btn btn-primary' id="basic-addon2">OK</button>
         </div>
         <h2>Result</h2>
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
