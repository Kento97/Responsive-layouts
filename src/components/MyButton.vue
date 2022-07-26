<script setup lang='ts'>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
type Props = {
    path: string,
}

const router = useRouter()
const props = defineProps<Props>()
const content = computed(() => {
    return `${props.path.slice(1)}`
})
const handleClick = () => {
    router.replace(props.path)
}
</script>

<template>
    <button class="btn" @click="handleClick">{{ content }}</button>
</template>

<style scoped lang="scss">
.btn {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: bold;
    margin: 5px 0;

    &:active {
        background-color: #ecf0f1;
        color: black;
        border: 1px solid black;
    }
}
</style>