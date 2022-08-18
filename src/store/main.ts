import { defineStore } from 'pinia';
import { ref } from 'vue'
// export const useMainStore = defineStore({
//     id: 'main',
//     state: () => ({
//         name: 'Gank',
//         age: 18
//     }),
//     getters: {
//         nameLength: ( state ) => state.name.length
//     }
// })

// setup模式
export const useMainStore = defineStore('main', () => {
    const name = ref<string>('Gnak')
    const age = ref<number>(18)
    // computed / getters
    const nameLength = () => name.value.length
    const updateName = (newName:string) => {
        name.value = newName
    }
    return { name, age, nameLength, updateName}
})
