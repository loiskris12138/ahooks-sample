import React, { useState, useEffect, memo, FC } from 'react'
import {useEventEmitter} from 'ahooks'
import ButtonApp from './ButtonApp'
import InputApp from './InputApp'
import WordApp from './WordApp'
interface useEventEmitterAppProps {}

const useEventEmitterApp:FC<useEventEmitterAppProps> = () => {
const focus$ = useEventEmitter<string>()
  return (
    <div>
    <ButtonApp focus$ = {focus$}/>
    <InputApp focus$ = {focus$}/>
    <WordApp focus$ = {focus$}/>
    </div>
  )
}

export default memo(useEventEmitterApp)