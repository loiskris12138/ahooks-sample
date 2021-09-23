import React, { useState, useEffect, memo, FC } from 'react';
import { Button } from 'antd';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';
interface ButtonAppProps {
  focus$: EventEmitter<string>;
}

const ButtonApp: FC<ButtonAppProps> = (props) => {
  const { focus$} = props
  const buttonClick = ()=>{
    focus$.emit('123')
  }
  return (
    <div>
      <Button onClick= {buttonClick}>input focus</Button>
    </div>
  );
};

export default memo(ButtonApp);
