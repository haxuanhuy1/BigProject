// import { Card, CardBody, CardTitle } from 'reactstrap';
// import { InputGroup, FormControl, Button } from 'reactstrap';
import {useState} from 'react'
const Nhap = ()=>{
    interface state {
        select : string
    }
    
        const [select , setSelect] = useState('Chọn dòng xe quý khách lái thử')
        const handclick = (opistion:string)=>{
            setSelect(opistion)
        
    }

    return (
        <div>
 <div className="dropdown">
  
    {/* <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    {select}
    </button> */}
    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
        {select}
      </button>
    <ul className="dropdown-menu">
      <li><a onClick={()=>{handclick('Mercerdes C200')}} className="dropdown-item" href="#">Mercerdes C200</a></li>
      <li><a onClick={()=>{handclick('Mercerdes C300')}} className="dropdown-item" href="#">Mercerdes C300</a></li>
      <li><a onClick={()=>{handclick('Mercerdes E200')}} className="dropdown-item" href="#">Mercerdes E200</a></li>
      <li><a onClick={()=>{handclick('Mercerdes E300')}} className="dropdown-item" href="#">Mercerdes E300</a></li>
      <li><a onClick={()=>{handclick('Mercerdes S450')}} className="dropdown-item" href="#">Mercerdes S450</a></li>
      <li><a onClick={()=>{handclick('Mercerdes S500')}} className="dropdown-item" href="#">Mercerdes S500</a></li>
      <li><a onClick={()=>{handclick('Mercerdes S650')}} className="dropdown-item" href="#">Mercerdes S650 </a></li>
      <li><a onClick={()=>{handclick('Mercerdes S650 maybach')}} className="dropdown-item" href="#">Mercerdes S650 Maybach</a></li>
      
    </ul>
  </div>

 {false ? <h1>hà xuân huy</h1> : null}
 
        </div>
    )
}
export default Nhap;
