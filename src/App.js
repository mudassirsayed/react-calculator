
import React,{useState} from 'react'
import './App.css'
import Addition from './component/Addition';
import Subtract from './component/Subtract';
import Multiplication from './component/Multiplication';
import Division from './component/Division';

import {useSelector} from 'react-redux';

export default function App() {

  const add = useSelector(state => state.add)
  const sub = useSelector(state => state.sub)
  const mul = useSelector(state=>state.mul)
  const div = useSelector(state=>state.div)
  const {sum} = add;
  const {mull} = mul
  const {subb} = sub
  const {divv} = div
 
  const [valueone,setvalueone] = useState('')
  const [valuetwo,setvaluetwo] = useState('')

  return (
    <div className="main_div">

<div className="center_div">
<header>
Calculator
</header>

<input type="number" value={valueone} placeholder="Enter value 1:" onChange={(e)=>setvalueone(e.target.value)} required/><br/>
<input type="number" value={valuetwo} placeholder="Enter value 2:" onChange={(e)=>setvaluetwo(e.target.value)} required/>
<div class="component_div">
<div className="btn">
<div className='com_one'>
<Addition valueone={valueone} valuetwo={valuetwo}></Addition>
<Subtract valueone={valueone} valuetwo={valuetwo}></Subtract></div>
<div className='com_two'>
<Multiplication valueone={valueone} valuetwo={valuetwo}></Multiplication>
<Division valueone={valueone} valuetwo={valuetwo}></Division></div>
</div>
</div>
<div className="total">Result{" "}{subb}{sum}{mull}{divv}</div>

</div>

    </div>
  )
}
