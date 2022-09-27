import React, { useState } from 'react';
import st from './Counter.module.scss'

const Counter = () => {

   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   }

   return (
      <div>
         <h1>{count}</h1>
         <button
            className={st.btn}
            onClick={increment}
         >
            Click
         </button>
      </div>
   )
}

export default Counter