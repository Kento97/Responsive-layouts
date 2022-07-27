<script setup lang='ts'>

</script>

<template>
    <article>
        <main>
            <div>我的购物车</div>
            <div>购物车中暂无视频</div>
        </main>
    </article>
</template>

<style scoped lang="scss">
$border-color: rgb(0, 184, 148);

article {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    main {
        width: 150px;
        font-size: 14px;
        position: relative;
        cursor: pointer;

        div {
            height: 50px;
            border: 1px solid;
            text-align: center;
            line-height: 3.5em;
            color: #555;

            &:nth-of-type(1) {
                background: #fff;
                position: relative;
                z-index: 2;
            }

            &:nth-of-type(2) {
                width: 300px;
                position: absolute;
                right: 0;
                top: 49px;
                display: none;
            }
        }

        &:hover {
            div:nth-of-type(1) {
                border-bottom: 0;
                border-style: dashed;
                border-color: $border-color;
            }

            div:nth-of-type(2) {
                display: block;
                border-style: dashed;
                border-color: $border-color;
            }
        }
    }
}
</style>