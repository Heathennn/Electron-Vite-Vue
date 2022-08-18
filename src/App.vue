<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useMainStore } from './store/main.js';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import HeadIcon from './assets/images/pet_dog.gif';
import { menuList, MenuItem } from './config/menu'
import { useRouter, useRoute } from 'vue-router'

const activeMenu = ref<MenuItem>({
    name: '首页',
    path: '/'
})
const nickName = ref<string>('Gnak\'s Gear')
const mainStore = useMainStore()
const router = useRouter();
// 结构state上的变量  storeToRefs 
const { name, age } = storeToRefs(mainStore)
const { updateName, nameLength } = mainStore

const changeMenuItem = (item:MenuItem) => {
    activeMenu.value = item;
    router.push({ name: item.routeName })
}

</script>

<template>
  <div class="main-container">
    <div class="menu-side-bar">
            <img class="head-icon" :src="HeadIcon"/>
            <div class="nick-name animate__animated animate__flipInX">{{ nickName }}</div>

            <div class="menu-box">
                <div :class="['menu-item', item.name === activeMenu.name && item.path === activeMenu.path && 'active']" v-for="item in menuList" @click="changeMenuItem(item)">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  .menu-side-bar {
        width: 200px;
        height: 100%;
        border-right: 1px solid #000000;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        align-items: center;
        .head-icon {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            // border: 1px dashed #912828;
        }
        .nick-name {
            font-size: 18px;
            padding-top: 10px;
            font-weight: bold;
        }

        .menu-box {
            width: 100%;
            padding: 20px 20px;
            .menu-item {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
                cursor: pointer;
                &.active {
                    color: #ffffff;
                    background-color: #c47d21;
                    border-radius: 10px;
                }
            }
        }
    }

    .content {
        flex: 1
    }
}
</style>
