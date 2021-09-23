import React, { useState, useEffect, memo, FC } from 'react';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';
interface WordAppProps {
  focus$: EventEmitter<string>;
}

const WordApp: FC<WordAppProps> = (props) => {
    const {focus$} = props
    focus$.useSubscription((val)=>{
        console.error(322323123,val)
    })
  return (
    <div>
      <span></span>
    </div>
  );
};

export default memo(WordApp);
