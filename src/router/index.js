import {createRouter, createWebHistory} from 'vue-router'
import ProductList from "@/components/ProductList.vue";
import AddDialog from "@/components/AddDialog.vue";
import EditDialog from "@/components/EditDialog.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component:ProductList
        },
        {
            path:'/add',
            name:'addProduct',
            component:AddDialog
        },
        {
            path:'/home',
            redirect:'/'
        },
        {
            path:'/edit/:id',
            name:'editProduct',
            component:EditDialog
        }
    ]
})

export default router
