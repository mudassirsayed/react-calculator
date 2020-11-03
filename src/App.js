import React, { useState } from 'react'
import Addition from './component/Addition';
import Subtract from './component/Subtract';
import Multiplication from './component/Multiplication';
import Division from './component/Division';
import './App.css';
import { useSelector } from 'react-redux';

export default function App() {
  const add = useSelector(state => state.add)
  const sub = useSelector(state => state.sub)
  const mul = useSelector(state => state.mul)
  const div = useSelector(state => state.div)
  const { sum } = add;
  const { mull } = mul
  const { subb } = sub
  const { divv } = div

  const [valueone, setvalueone] = useState('')
  const [valuetwo, setvaluetwo] = useState('')

  return (
    <div className="container">
      <div className="main">
        <div className="input">
          <label>Enter value 1:</label>
          <div><input type="number" value={valueone} onChange={(e) => setvalueone(e.target.value)} /></div>
          <label>Enter value 2:</label>
          <div>
            <input type="number" value={valuetwo} onChange={(e) => setvaluetwo(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="btn">
        <div className="rowone">
          <div><Addition valueone={valueone} valuetwo={valuetwo}></Addition></div>
          <div><Multiplication valueone={valueone} valuetwo={valuetwo}></Multiplication></div>
        </div>
        <div className="rowtwo">
          <div><Subtract valueone={valueone} valuetwo={valuetwo}></Subtract></div>
          <div><Division valueone={valueone} valuetwo={valuetwo}></Division></div>
        </div>
      </div>
      <div className="total">
        Result:{sum}{subb}{mull}{divv}
      </div>
    </div>
  )
}
