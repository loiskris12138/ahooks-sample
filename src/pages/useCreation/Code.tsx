import { useRef } from 'react';

export default function useCreation<T>(factory: () => T, deps: any[]) {
    console.error(deps)
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  console.error(current.obj)
  return current.obj as T;
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true;
  console.error(oldDeps,deps)
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== deps[i]) return false;
  }
  return true;
}
