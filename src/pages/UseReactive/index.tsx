import React, { useState, useEffect, memo, FC } from 'react';
import { useReactive } from 'ahooks';
import { Button, Input } from 'antd';
import { array } from 'yargs';
interface UseReactiveProps {}

const UseReactive: FC<UseReactiveProps> = () => {
  const state = useReactive({ value: 0, array: [] });
  const stateArray = useReactive({
    arr: [] as any,
  });
  const list = useReactive({
    bug: '',
    bugList: [],
    getLength() {
      return this.bugList.length;
    },
    addBug(bug: string) {
      this.bugList.push(bug);
    },
  });
  return (
    <div>
      {state.value}
      {JSON.stringify(stateArray)}
      <Button
        onClick={() => {
          state.value++;
        }}
      >
        点击增加
      </Button>
      <Button
        onClick={() => {
          state.value--;
        }}
      >
        点击减少
      </Button>
      <Button
        onClick={() => stateArray.arr.push(Math.floor(Math.random() * 100))}
      >
        数组操作
      </Button>
      <Input
        value={list.bug}
        onChange={(e) => {
          list.bug = e.target.value;
        }}
      />
      <Button
        onClick={() => {
          list.addBug(list.bug);
        }}
      >
        提交
      </Button>
      {list.bugList.map((item,index) => {
        return <p key = {index}>{item}</p>;
      })}
    </div>
  );
};

export default memo(UseReactive);
