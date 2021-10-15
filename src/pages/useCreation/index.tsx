import React, { useState, useRef, memo, FC, useCallback } from 'react';
// import { useCreation } from 'ahooks';
import useCreation from './Code'
import { Button } from 'antd';
interface UseCreationProps {}
// 生成随机数
class Random {
  public data: number;
  constructor() {
    this.data = Math.random();
  }
}

const UseCreation: FC<UseCreationProps> = () => {
  // ref测试
  const ref = useRef(new Random());

  const [, setFlag] = useState({});
  const [changeFlag, setChangeFlag] = useState(0);
  // useCreation
  const data = useCreation(() => {
    return new Random();
  }, [changeFlag]);

  return (
    <div>
      <p>{data.data}</p>
      <p>{ref.current.data}</p>
      <Button
        onClick={() => {
          setFlag({});
        }}
      >
        点击测试
      </Button>
      <Button
        onClick={() => {
          setChangeFlag(changeFlag + 1);
        }}
      >
        点击变化
      </Button>
    </div>
  );
};

export default memo(UseCreation);
