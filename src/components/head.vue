<template>
	<header id="head_top">
		<slot name='logo'></slot>
    	<slot name='search'></slot>
    	<section class="head_goback" v-if="goBack" @click="$router.go(-1)">
    		<i class="fa fa-chevron-left" aria-hidden="true" style="color:white;"></i>
    	</section>
    	<router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <span v-if="userInfo">
                <i class="fa fa-chevron-left" aria-hidden="true" style="color:white;"></i>
            </span>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
	</header>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		mounted(){
            this.getUserInfo()
		},
		props:['signinUp','headTitle','goBack'],
        computed:{
            ...mapState(['userInfo']),
        },
        methods:{
            ...mapActions(['getUserInfo']),
        }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../style/mixin';
	#head_top{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .head_goback{
        left: 0.4rem;
        @include wh(0.6rem, 1rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
</style>