<template>
    <div id="test">{{text}}</div>
</template>
<script>
    export default {
        data(){
            return {
                text:'hello webpack!'
            }
        }
    }
</script>
<style>
    #text{
        color: #999;
    }
</style>