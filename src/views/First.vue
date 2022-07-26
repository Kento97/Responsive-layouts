<script setup lang='ts'>
</script>

<template>
    <div id="div0">
        <div id="div1"></div>
        <div id="div2"></div>
        <div id="div3"></div>
    </div>
</template>

<style scoped lang="scss">
#div0 {
    width: 100%;
    -webkit-transition: all 2s linear;
    transition: all 2s linear;

    #div1 {
        background-color: #27ae60;
    }

    #div2 {
        background-color: #2c3e50;
    }

    #div3 {
        background-color: #f1c40f;
    }
}

/* 1行三个div */
@media screen and (min-width:968px) {
    #div0 {
        display: flex;

        div {
            height: 600px;
            flex: 1;
        }
    }
}

/* 2行三个div */
@media screen and (min-width:575px) and (max-width:968px) {
    #div0 {
        display: flex;
        flex-wrap: wrap;

        div {
            width: 50%;
            height: 300px;
        }

    }
}

/* 3行三个div */
@media screen and (max-width:575px) {
    #div0 {
        display: flex;
        flex-direction: column;

        div {
            width: 100%;
            height: 300px;
        }

    }
}
</style>