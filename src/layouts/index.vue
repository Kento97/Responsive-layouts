<script setup lang='ts'>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import MyButton from '../components/MyButton.vue';

const router = useRouter()
const pathList = computed(() => router.options.routes[0].children)
</script>

<template>
    <div class="container">
        <div class="sideBar">
            <div class="logo">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.1wKrEjPKYx53xS8HyS69kgHaC9?pid=ImgDet&rs=1"
                    alt="rust">
            </div>
            <ul>
                <li v-for="(pathItem, index) in pathList" :key="index">
                    <MyButton :path="`/${pathItem.path}`" />
                </li>
            </ul>
        </div>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100%;
    display: flex;

    .sideBar {
        height: 100%;
        width: 200px;
        border-right: 1px solid;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: auto;

        .logo {
            width: 100%;
            height: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        ul {
            width: 100%;
            margin: 0;
            padding: 0;
            padding-top: 20px;

            li {
                width: 100%;
                list-style: none;
                margin: 0;
                text-align: center;
            }
        }

    }

    .content {
        width: 100%;
        padding: 10px;
        margin-left: 200px;
        overflow-y: auto;
    }
}
</style>