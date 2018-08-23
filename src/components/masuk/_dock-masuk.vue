<template>
    <div>
        <navbar/>
        <transition name="fade"><router-view></router-view></transition>
    </div>
</template>
<script>
import navbar from './navbar'
export default {
components:{navbar},
}
</script>