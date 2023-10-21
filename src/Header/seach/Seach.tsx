import clsx from 'clsx';
import Styles from './Seach.module.scss'
import { useDispatch } from 'react-redux';
import { seachcrement } from '../../redux/dispatch';
export const Seach = ()=>{
    
    return(
        <div  className={clsx(Styles.seach)}>
         <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>   
        </div>
    )
}