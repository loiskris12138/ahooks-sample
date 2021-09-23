import React, { useState, useEffect, memo, FC ,useRef} from 'react';
import { Input } from 'antd';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';
interface InputAppProps {
  focus$: EventEmitter<string>
}

const InputApp: FC<InputAppProps> = (props) => {
    const { focus$} = props
    const inputRef = useRef<any>()
    const [inputValue,setInputValue] = useState('')
    focus$.useSubscription((val)=>{
        console.error(val,inputRef.current)
        inputRef.current.focus()
        setInputValue(val)
        
    })
  return (
    <div>
      <Input ref = {inputRef} value = {inputValue} onChange = {(e)=>{
          setInputValue(e.target.value)
      }}/>
    </div>
  );
};

export default memo(InputApp);
