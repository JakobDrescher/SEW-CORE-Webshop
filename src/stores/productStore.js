import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useProductStore = defineStore('productStore', () => {
    const products = ref([{
        name: "NERF Elite 2.0 Double Punch",
        price: "47.99",
        description: "A NERF Elite 2.0 blaster with two barrels which fire alternately.",
        img: "https://m.media-amazon.com/images/I/617YpZgOrPL._AC_SX679_.jpg",
        id: 0
    }]);

    function addProduct(name, price, description, img, id) {
        let result = {
            name: name,
            price: price,
            description: description,
            img: img,
            id: id
        }
        products.value.push(result);
    }

    function deleteProduct(id) {
        products.value = products.value.filter(p => p.id != id);
    }

    function getProduct(id) {
        return products.value.filter(p => p.id == id)[0];
    }

    function editProduct(name, price, description, img, id) {
        let newProduct = {
            name: name,
            price: price,
            description: description,
            img: img,
            id: id
        }

        products.value.forEach((p,i)=>{
            if (p.id==id){
                products.value[i]=newProduct;
            }
        })

    }

    return {products, addProduct, deleteProduct, getProduct, editProduct}
})
