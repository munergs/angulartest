import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

interface RouterStroageObject {
    snapshot: ActivatedRouteSnapshot;
    handle: DetachedRouteHandle;
}

export class RouterStrategy implements RouteReuseStrategy {

    storedRoutes: { [key: string]: RouterStroageObject } = {};
    storedData: { [key: string]: any } = {};


    /**
     * 
     * 路由离开时是否需要保存页面，这是实现自定义路由复用策略最重要的一个方法。
其中：

返回值为true时，路由离开时保存页面信息，当路由再次激活时，会直接显示保存的页面。

返回值为false时，路由离开时直接销毁组件，当路由再次激活时，直接初始化为新页面。
     */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // console.log('shouldDetach的事件中的route', route)
        if (route.data.noReuse) {
            return false
        }
        return true
    }

    /**
如果shouldDetach方法返回true，会调用这个方法来保存页面。
     */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // console.log('store的事件', 'route', route, 'handle', handle);
        const storedRoute: RouterStroageObject = {
            snapshot: route,
            handle: handle
        }
        this.storedRoutes[this.getRouteUrl(route)] = storedRoute;
        // console.log('this.storedRoutes', this.storedRoutes)
    }

    /**
     * 
路由进入页面时是否有页面可以重用。 true： 重用页面，false：生成新的页面
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.storedRoutes[this.getRouteUrl(route)];
    }

    /**
     * 
路由激活时获取保存的页面，如果返回null，则生成新页面
     */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        if (!route.routeConfig || route.routeConfig.loadChildren || !this.storedRoutes[this.getRouteUrl(route)]) {
            return null
        }
        return this.storedRoutes[this.getRouteUrl(route)].handle
    }

    /**
     * 
     决定跳转后是否可以使用跳转前的路由页面，即跳转前后跳转后使用相同的页面
     */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params);
    }

    private getRouteUrl(route: ActivatedRouteSnapshot) {
        //@ts-ignore
        const url = route['_routerState'].url;
        const path = url.replace(/\//g, '_') + '_' + (route.routeConfig?.loadChildren || route.routeConfig?.component?.toString().split('(')[0].split(' ')[1]);
        return path
    }

}