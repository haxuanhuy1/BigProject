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
import S450 from '../Content/imgcontent/S450.jpg'
import c200cu2019 from '../Content/imgcontent/c20-2018cu.jpg'
import c200cu2018 from '../Content/imgcontent/c20-2018cu.jpg'
import c250cu from '../Content/imgcontent/c250-2018cu.jpg'
import e200cu from '../Content/imgcontent/e200cu.jpg'
import e200cuden from '../Content/imgcontent/e200dencu.jpg'
import glc200cu from '../Content/imgcontent/glc-2019cu.jpg'
import cantho from '../Content/imgcontent/Cantho.jpg'
import hoankiem from '../Content/imgcontent/Hoankiem.png'
import nhatrang from '../Content/imgcontent/Nha trang.jpg'

const Content = ()=>{
    return(
        <div>

 <div className={clsx(Styles.dropdown)}>
 <a style={{textDecoration:'none'}} href=''><h2>XE MERCEDES-BENZ NEW</h2></a>
  
  <div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c200} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz C200 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.599.000.000</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c200ps} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz C200 Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.849.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c300} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz C300 Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">2.099.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>

{/* /* mercedes này  */ }
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={E180} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz E180 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">2.159.000.000</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={E200} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz E200 Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">2.540.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={eqs} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz EQS Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">2.099.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
{/* mer gls */}
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={E300} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz E300 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">3.029.000.000</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={glc200} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz GlC200 Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">2.299.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={glc300} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz GLC300 Plus | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">2.799.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
{/* S luxury */}
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={S450lx} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz S450 Luxury | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">5.599.000.000</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={gls450} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz GLS450  | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">5.249.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={S450} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz S450 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">4.099.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>

  </div>
  <div className={clsx(Styles.quasudung)}>
    <a style={{textDecoration: 'none'}} href=''><h2>XE CŨ ĐÃ QUA SỬ DỤNG</h2></a>
  <div>
  <div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c200cu2018} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz C200 2018 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.319.000.000</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c200cu2019} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz C200 2019  | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.399.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c250cu} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz C250 Exclusive 2018 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.319.000.000</a>
  </div>
</div>
    </div>
    
    </div>

</div>
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={e200cu} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz E200 2019 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.359.000.000</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={e200cuden} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz E200 2018  | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.799.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={glc200cu} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz GLC 200 2019 | Mercedes Hà Nội</p>
    <a href="#" className="btn btn-primary">1.619.000.000</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
  </div>
  </div>
  <div className={clsx(Styles.daili)}>
    <h2>Đại lí Mercedes</h2>
    <div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={cantho} alt="Card image cap"/>
  <div className="card-body">
    <span><a href=''>Mercedes-Benz Haxaco Cần Thơ</a></span>
    <p className="card-text">Mercedes Hà Nội - 20/09/2022</p>
    <p>Mercedes-Benz Haxaco Cần Thơ là đại lý ủy quyền phân phối chính hãng các dòng xe của Mercedes-Benz Việt Nam tại Thành phố Cần Thơ, Đây là cơ sở mới...</p>
    <a href="#" className={clsx('btn btn-primary' ,Styles.xemchitiet )}>Xem chi tiết</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={hoankiem} alt="Card image cap"/>
  <div className="card-body">
    <span><a href=''>Mercedes-Benz Hoàn Kiếm</a></span>
    <p className="card-text">Mercedes Hà Nội - 08/09/2022</p>
    <p>Mercedes-Benz Vietnam Star Hoàn Kiếm là đại lý ủy quyền phân phối chính hãng các dòng xe của Mercedes-Benz Việt Nam tại Hà Nội, Đây là cơ sở được di...</p>
    <a href="#" className={clsx('btn btn-primary' ,Styles.xemchitiet )}>Xem chi tiết</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={nhatrang} alt="Card image cap"/>
  <div className="card-body">
    <span><a href=''>Mercedes-Benz Nha Trang</a></span>
    <p>Mercedes Hà Nội - 10/07/2022</p>
    <p>Mercedes Nha Trang là đại lý ủy quyền phân phối chính hãng các dòng xe của Mercedes-Benz Việt Nam tại khu vực Nha Trang, là đơn vị trực thuộc của...</p>
      <a href="#" className={clsx('btn btn-primary' ,Styles.xemchitiet )}>Xem chi tiết</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
  </div>
</div>

    )
}
export default Content;
