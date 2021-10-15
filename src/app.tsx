import React, { useState, useEffect, memo, FC } from 'react';

export function onRouteChange({ matchedRoutes }) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
    console.error(matchedRoutes[matchedRoutes.length - 1].route.title);
  }
}
export function rootContainer(container) {
  return <App container={container}></App>;
}

interface IProps {
  container: any;
}
// 适配

const App: FC<IProps> = ({ container }) => {
  const setRem = () => {
    const htmlWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    // 得到html的Dom元素
    const htmlDom = document.getElementsByTagName('html')[0];
    // 设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 128 + 'px';
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    setRem();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onResize = () => {
    setRem();
  };
  return container;
};
