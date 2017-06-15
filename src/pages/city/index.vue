<template>
  	<div class="city_container">
        <head-top :head-title="cityname" go-back='true'>
            <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
        </head-top>
       
    </div>
</template>

<script>
    import VHead from '../../components/head'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            VHead
        },
        methods:{
        
        }
    }
</script>