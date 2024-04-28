import type { RouteParams } from "vue-router"
// ---- 方案一：
// type Params = {
//   id: string
// }
// const route = useRoute().params as Params

// ---- 方案二：

function useParams<T extends RouteParams>() {
    const route = useRoute()
    return computed(() => route.params as T)
}
export default useParams