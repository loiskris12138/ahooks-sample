import { useLockFn } from 'ahooks';
import { Button, message } from 'antd';
import React, { useState, useEffect, memo, FC } from 'react';

interface UseLockFnProps {}

const UseLockFn: FC<UseLockFnProps> = () => {
  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
  };
  const submit = useLockFn(async () => {
    message.success('点击开始');
    const data = await getData();
    console.error(data);
    message.success('点击结束');
  });
  return (
    <div>
      <Button onClick={submit}>点击测试</Button>
    </div>
  );
};

export default memo(UseLockFn);
