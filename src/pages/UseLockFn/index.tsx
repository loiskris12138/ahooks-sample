import { useLockFn } from 'ahooks';
import { Button, message } from 'antd';
import React, { useState, useEffect, memo, FC } from 'react';

interface UseLockFnProps {}

const UseLockFn: FC<UseLockFnProps> = () => {
  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, 2000);
    });
  };
  // useLockFn函数直接执行了 直接返回函数return的函数。每次点击触发return的函数
  // 实际上就是写了个锁
  const submit = useLockFn(async () => {
    message.success('点击开始');
    const data = await getData();
    message.success('点击结束');
  });

  return (
    <div>
      <Button onClick={()=>{submit()}}>点击测试</Button>
    </div>
  );
};

export default memo(UseLockFn);
