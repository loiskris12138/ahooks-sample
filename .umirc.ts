import { defineConfig } from 'umi';

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
      component: '@/pages/useEventEmitter',
      title: 'useEventEmitter',
    },
    { path: '/useLockFn', component: '@/pages/useLockFn', title: 'useLockFn' },
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [

]
});
