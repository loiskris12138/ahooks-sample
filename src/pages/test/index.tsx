import React, { useState, useEffect, memo, FC } from 'react'
import UseLockFn from '@/pages/UseLockFn'
interface IProps {}
import styles from './index.less'
const Index:FC<IProps> = () => {

  return (
    <div className = {styles.box}>
<UseLockFn/>
<UseLockFn/>
    </div>
  )
}

export default memo(Index)