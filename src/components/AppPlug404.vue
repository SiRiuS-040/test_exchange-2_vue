<template lang="pug">
section(class="app-plug-404")
    img(src="../assets/img/404.png" alt="" width="280" height="200" class="app-404-plug__image")
    h2(class="app-plug-404__text") Страница не найдена
    p (возможно неполадки с сетью)
</template>

<script>

export default {
    name: "AppPlug404",
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss">
    @import "../assets/variables";
    @import "../components/styles/appPlug404/app-plug-404";
</style>