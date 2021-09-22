import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    {path:'/test',component:'@/pages/test'},
    {path:'/useEventEmitter',component:'@/pages/useEventEmitter'}
  ],
  fastRefresh: {},
});
