import { defineConfig } from 'umi';
import px2rem  from 'postcss-plugin-px2rem';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test', title: 'test' },
    {
      path: '/useEventEmitter',
      component: '@/pages/UseEventEmitter',
      title: 'useEventEmitter',
    },
    { path: '/useLockFn', component: '@/pages/UseLockFn', title: 'useLockFn' },
    { path: '/useCreation', component: '@/pages/UseCreation', title: 'useCreation' },
    { path: '/useReactive', component: '@/pages/UseReactive', title: 'useReactive' },
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [
    px2rem ({
      rootValue: 15, // 根据设计稿设置
      propList: ['*']
   }),
]
});
