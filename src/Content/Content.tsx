import S500 from '../img/s500.avif'
import clsx from 'clsx';
import Styles from './Content.module.scss'
import c200 from '../Content/imgcontent/c200 -2-23.jpg';
import c300 from '../Content/imgcontent/c300.jpg'
import c200ps from '../Content/imgcontent/c200-plus.jpg';
import E180 from '../Content/imgcontent/E180.jpg'
import E200 from '../Content/imgcontent/E200.jpg'
import E300 from '../Content/imgcontent/E300.jpg'
import glc200 from '../Content/imgcontent/glc-200.jpg'
import glc300 from '../Content/imgcontent/glc-300.jpg'
import gls450 from '../Content/imgcontent/gls 450.jpg'
import S450lx from '../Content/imgcontent/s450 lx.jpg'
import eqs from '../Content/imgcontent/eqs 500.jpg'
const Content = ()=>{
    return(
        <div>

 <div className={clsx(Styles.dropdown)}>
  <h1 style={{paddingTop: '30px'}}>XE MERCEDES-BENZ NEW </h1>
  <div className="row">
    <div  className={clsx(Styles.col)}>
    <div className="card" style={{width: '18rem'}}>
  <img src={c200} className="card-img-top" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    <p className="card-text">Mercedes-Benz C200 Avantgarde | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.599.000.000</a>
  </div>
</div>
    </div>
    <div  className={clsx(Styles.col)}>
    <div className="card" style={{width: '18rem'}}>
  <img src={c200ps} className="card-img-top" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    <p className="card-text">Mercedes-Benz C200 Avantgarde Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.599.000.000</a>
  </div>
</div>
    </div>
    <div  className={clsx(Styles.col)}>
    <div className="card" style={{width: '18rem'}}>
  <img src={c200ps} className="card-img-top" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    <p className="card-text">Mercedes-Benz C200 Avantgarde Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.599.000.000</a>
  </div>
</div>
    </div>
    <div  className={clsx(Styles.col)}>
    <div className="card" style={{width: '18rem'}}>
  <img src={c200ps} className="card-img-top" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    <p className="card-text">Mercedes-Benz C200 Avantgarde Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.599.000.000</a>
  </div>
</div>
    </div>
    
   

  </div>


        </div>
        </div>
    )
}
export default Content;
