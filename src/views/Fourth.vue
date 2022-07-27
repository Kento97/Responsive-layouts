<script setup lang='ts'>

</script>

<template>
    <div id="container">
        <header></header>
        <main></main>
        <footer>
            <section>
                <h4>框架</h4>
                <ul>
                    <li>Vue</li>
                    <li>React</li>
                </ul>
            </section>
            <section>
                <h4>语言</h4>
                <ul>
                    <li>JS</li>
                    <li>TS</li>
                    <li>Rust</li>
                </ul>
            </section>
            <section>
                <h4>生态</h4>
                <ul>
                    <li>Vue</li>
                    <li>React</li>
                </ul>
            </section>
        </footer>
    </div>
</template>

<style scoped lang='scss'>
#container {
    width: 32%;
    height: 100%;
    margin: 0 auto;
    background-color: #ecf0f1;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    display: flex;
    flex-direction: column;

    header {
        height: 50px;
        background-color: #2c3e50;
    }

    main {
        flex: 1;
        background-color: #d2dae2;
    }

    footer {
        height: 50px;
        display: flex;
        justify-content: space-between;
        background-color: #d1d8e0;
        border-top: solid 1px #ccc;

        section {
            flex: 1;
            display: flex;
            flex-direction: column-reverse;

            &:nth-child(n+1) {
                border-right: 1px solid #bbb;
            }

            h4 {
                flex: 0 0 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                background-color: #706fd3;

            }

            ul {
                display: flex;
                flex-direction: column;
                border: 1px solid;
                padding: 0;
                border-radius: 5px;

                li {
                    list-style: none;
                    flex: 1 0 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-bottom: solid 1px #ccc;
                    cursor: pointer;

                    &:active {
                        margin-right: 3px;
                        margin-bottom: 3px;
                    }

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }
}
</style>