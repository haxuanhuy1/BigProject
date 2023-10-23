import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headerone from './Header/Headerone'
import Content from './Content/Content'
import Nhap from './Nhap/Nhap'
import Slide from './Slider/Slider';
import { useEffect , useState } from "react"
import { Modal } from './Modal/Modal';
import { decrement } from './redux/dispatch';
import { useSelector } from 'react-redux';
import Footer from './footer/Footer';
function App() {
  const [isvisible , setIsvisible] = useState(false);
  // useEffect (()=>{
  //     setTimeout(()=>{
  //         setIsvisible(true)
  //     }, 3000)
  // }, [])
  setTimeout(()=>{
    setIsvisible(true)
}, 3000)
  interface Root {
    payload : boolean,
    id : number
  }
  const user: Root= {
    id : 1,
    payload : true
  }
  interface root {
    user : {
      id : number,
      payload : boolean
    }
    product : {
      id : number,
      payload : boolean
    }
  }
 
  const statestore = useSelector((state:root) => state.user)
console.log(statestore.payload)

      // Kiểm tra giá trị của statestore và cập nhật isModalVisible
  //     setIsvisible(statestore)
  //     console.log(statestore)
  //   }, [statestore]);
  // console.log(statestore)
 
  // useEffect(() => {
  //   // Kiểm tra giá trị của statestore và cập nhật isModalVisible
  //   setIsvisible(statestore)
  //   console.log(statestore)
  // }, [statestore]);
  // useEffect(() => {
  //   if (statestore !== prevStoreValue) {
  //     // Giá trị của statestore đã thay đổi, cập nhật isvisible
  //     setIsvisible(statestore);
  //     setPrevStoreValue(statestore); // Cập nhật giá trị trước đó
  //   }
  // }, [statestore, prevStoreValue]);
// console.log(statestore)
  return (
    <div  className="App">
     
    <Headerone />
    <Slide />
   <Content />
    {/* <Nhap /> */}
    {isvisible && statestore.payload   ? <Modal /> : null}
    {/* {statestore && isvisible  && <Modal />} */}
    <Footer />
    </div>
  );
}

export default App;
