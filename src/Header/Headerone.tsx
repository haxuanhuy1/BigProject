import Styles from './Header.module.scss'
import clsx from 'clsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import s450 from '../img/s450.jpg'
import s450mb from '../img/s450mb.jpg'
import s500 from '../img/s500.avif'
import Logo from '../img/MERCEDES-BENZ-HA-NOI-LOGO.png'
import { runInContext } from 'vm';
import {Seach} from '../Header/seach/Seach'
import {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { closeach, seachcrement } from '../redux/dispatch';
const Header = ()=>{
  const [isSeach , setIsSeach] = useState(false)
  interface rootSeach {
    user : {
      id: number,
      payload : boolean
    }
    product : {
      id : number  ,
      payload : boolean
    }
  }
  const dispatch = useDispatch()
   
  const seach = useSelector((state:rootSeach) => state.product)
  console.log(seach.payload)
  const seachclick = ()=>{
    if(seach.payload){
      dispatch(closeach())
    }else{
      dispatch(seachcrement())
    }
 }
    return (
        <div>
        <div className={clsx(Styles.heading)} >
          <div style={{paddingRight: '235px'}}>
            <img style={{width: '100px' , height: '50px'}} src={Logo}></img>
          </div>
            <div className={clsx(Styles.ul1)} style={{width:"100%" , display:'flex', }}>

      <div className={clsx(Styles.phone)}>
      <i style={{lineHeight:'50px',  marginRight: '4px'}} className="fa-solid fa-phone-flip"></i>
      <p className={clsx(Styles.hotline)} style={{lineHeight: '50px'}}><a   href=''>Holine: 0906999541</a></p>
      </div>
      <div className={clsx(Styles.border)}>   
      </div>


      <div className={clsx(Styles.phone)}>
      <i style={{lineHeight:'50px',  marginRight: '4px'}} className="fa-solid fa-film"></i>
      <p  style={{lineHeight: '45px'}}><a href=''>Bảng giá xe</a></p>
      </div>
      <div className={clsx(Styles.border)}>   
      </div>
        <div className={clsx(Styles.phone)}>
      <i style={{lineHeight:'50px',  marginRight: '4px'}} className="fa-solid fa-newspaper"></i>
      <p style={{lineHeight: '45px'}}><a href=''>Chi phí lăn bánh</a></p>
      </div>
      <div className={clsx(Styles.border)}>   
      </div>
    
        </div>
        </div>
        <div className={clsx(Styles.gioithieu)}>
          <ul>
            <li>
              <a href=''>
              Giới Thiệu
              </a>
             
            </li>
            <li>
              <a href=''>
               Bảng Giá Xe
              </a>
            </li>
            <li>
              <a href=''>
                Xe Mới
              </a>
              {/* <ul style={{}}>
                <li>
                  <a href=''>C -Class</a>
                </li>
                <li>
                  <a href=''>E-Class</a>
                </li>
                <li>
                  <a href=''>S-Class</a>
                </li>
                <li>
                  <a href=''>GLC
                  </a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href=''>Xe Cũ</a>
            </li>
            <li><a href=''>Thư Viện Ảnh</a></li>
            <i onClick={seachclick} style={{paddingLeft :'50px'}} className="fa-solid fa-magnifying-glass"></i>
          {/* <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav> */}
{seach.payload ? <Seach /> : null}
          </ul>
        </div>
        </div>
        
    )
}
export default Header;
