import { useEffect , useState } from "react"
import clsx from'clsx'
import Styles from './Modal.module.scss'
import { Button, Tooltip,UncontrolledTooltip , CloseButton } from 'reactstrap';
import {useDispatch} from 'react-redux'
import { decrement } from '../redux/dispatch';
export const Modal = ()=>{
  interface state {
    select : string
}

    const [select , setSelect] = useState('Chọn dòng xe quý khách lái thử')
    const handclick = (opistion:string)=>{
        setSelect(opistion)
}
const dispatch = useDispatch()
const hanclick = ()=>{
  dispatch(decrement())
  
}
    return (
      <div>

<h1>hà xuân huy</h1>
<form className={clsx(Styles.form)}>
  <div style={{paddingLeft: '580px' , paddingBottom: '10px'}}>

<  CloseButton onClick={hanclick}  />
  </div>
<div className="form-group">
    {/* <label htmlFor="formGroupExampleInput">Email</label> */}
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Họ Tên...."/>
  </div>
  <div className="form-group">
    {/* <label htmlFor="formGroupExampleInput">Email</label> */}
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="SĐT...."/>
  </div>
  <div className="form-group">
    {/* <label htmlFor="formGroupExampleInput">Email</label> */}
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email...."/>
  </div>
  <div className="form-group">
    {/* <label htmlFor="formGroupExampleInput">Email</label> */}
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Password...."/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Dòng xe đang quan tâm</label>
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
  </div>
  <div className="text-center">
  <Button id="ScheduleUpdateTooltip">
    Đăng nhập
  </Button>
  <UncontrolledTooltip
    placement="top"
    target="ScheduleUpdateTooltip"
    trigger="click"
  />
</div>
</form>
  
        </div>
     
    )
}