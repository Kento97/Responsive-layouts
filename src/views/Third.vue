<script setup lang='ts'>

</script>

<template>
    <div id="mobile-container">
        <main>
            你干嘛~~~~~~~~~哎哟
        </main>
        <footer>
            <div>鸡</div>
            <div>你</div>
            <div>太</div>
            <div>美</div>
        </footer>
    </div>
</template>

<style scoped lang='scss'>
#mobile-container {
    width: 30%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    main {
        flex: 1;
        background-color: #7ed6df;
    }

    footer {
        display: flex;
        justify-content: space-evenly;
        background: linear-gradient(to right, #a29bfe, #00b894, #ffeaa7);
        height: 60px;

        div {
            flex: 1;
            text-align: center;
            line-height: 60px;
            color: #555;

            &:nth-child(n+2) {
                border-left: 1px solid #666;
            }
        }
    }
}
</style>