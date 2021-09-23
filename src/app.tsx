export function onRouteChange({ matchedRoutes }) {
   
    if (matchedRoutes.length) {
      document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
      console.error(matchedRoutes[matchedRoutes.length - 1].route.title)
    }
  }