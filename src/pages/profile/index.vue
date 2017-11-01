<template>
    <div class="profile_page">
        <v-head go-back='true' :head-title="profiletitle"></v-head>
        <section>
            <section class="profile-number">
               <router-link :to="userInfo&&userInfo.user_id ? '/profile/info':'/login'" class="profile-link">
                   <img :src="imgBaseUrl + userInfo.avatar" class="privateImage" v-if="userInfo&&userInfo.user_id">
                    <span class="privateImage" v-else>
                        <svg class="privateImage-svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="user-info">
                        <p>{{username}}</p>
                        <p style="display:inline-block">
                            <span class="user-icon">
                                <i class="fa fa-mobile" aria-hidden="true" style="color:white;"></i>
                            </span>

                            <span class="icon-mobile-number">{{mobile}}</span>
                        </p>
                        <span class="arrow" style="float:right">
                            <i class="fa fa-chevron-right" aria-hidden="true" style="color:white;"></i>
                        </span>
                    </div>
               </router-link>
            </section>
            
            <section class="info-data">
                <ul class="clear">
                    <router-link to="/" tag="li" class="info-data-link">
                        <span class="info-data-top">
                            <b>{{parseInt(balance).toFixed(2)}}</b>元
                        </span>
                        <span class="info-data-bottom">我的余额</span>
                    </router-link>
                    <router-link to="/" tag="li" class="info-data-link">
                        <span class="info-data-top">
                            <b>{{count}}</b>
                        </span>
                        <span class="info-data-bottom">我的优惠</span>
                    </router-link>
                    <router-link to="/" tag="li" class="info-data-link">
                        <span class="info-data-top">
                            <b>{{pointNumber}}</b>
                        </span>
                        <span class="info-data-bottom">我的积分</span>
                    </router-link>
                </ul>
            </section>
            
            <section class="profile-1reTe">
                <router-link to="/" class="myorder">
                    <aside>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </aside>
                    
                    <div class="myorder-div">
                        <span>&nbsp;&nbsp;我的订单</span>
                        <span class="myorder-divsvg">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </router-link>

                <!-- 积分商城 -->
                <a href='https://home.m.duiba.com.cn/#/chome/index' class="myorder">
                    <aside>
                       <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </aside>
                    <div class="myorder-div">
                        <span>&nbsp;&nbsp;积分商城</span>
                        <span class="myorder-divsvg">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </a>

                 <!-- 饿了么会员卡 -->
                <router-link to='/' class="myorder">
                    <aside>
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                    </aside>
                    <div class="myorder-div">
                        <span>&nbsp;&nbsp;饿了么会员卡</span>
                        <span class="myorder-divsvg">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </router-link>
            </section>
            

            <section class="profile-1reTe">
                <!-- 服务中心 -->
                <router-link to='/' class="myorder">
                    <aside>
                        <i class="fa fa-server" aria-hidden="true"></i>
                    </aside>
                    <div class="myorder-div">
                        <span>&nbsp;&nbsp;服务中心</span>
                        <span class="myorder-divsvg">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </router-link>

                <!-- 下载饿了么APP -->
                <router-link to='/' class="myorder">
                    <aside>
                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                    </aside>
                    <div class="myorder-div" style="border-bottom:0;">
                        <span>&nbsp;&nbsp;下载饿了么APP</span>
                        <span class="myorder-divsvg">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </router-link>
            </section>

        </section>
        <v-footer></v-footer>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    import VHead from '../../components/head'
    import VFooter from '../../components/footer'
    import {mapState, mapMutations} from 'vuex'


    export default {
        data() {
            return {
                profiletitle:'我的',
                username:'登录/注册',
                mobile:'11111',
                avatar:'',
                imgBaseUrl:'',
                balance:0, // 我的余额
                count:0,//我的优惠
                pointNumber:0,//我的积分
            }
        },
        components:{
            VHead,
            VFooter
        },
        mounted(){
            this.ininDate();
        },
        computed:{
            ...mapState([
                'userInfo'
            ])
        },
        methods:{
            ininDate() {
                if(this.userInfo && this.userInfo.user_id ) {
                    this.avatar = this.userInfo.avatar;
                    this.username = this.userInfo.username;
                    this.mobile = this.userInfo.mobile || '暂无绑定手机号';
                    this.balance = this.userInfo.balance;
                    this.count = this.userInfo.gift_amount;
                    this.pointNumber = this.userInfo.point;
                }
                else {
                    this.username = '登录/注册';
                    this.mobile = '暂无绑定手机号'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        padding-top:1.95rem;
        .profile-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:$blue;
            padding: .666667rem .6rem;
            .privateImage{
                display:inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius:50%;
                vertical-align:middle;
                .privateImage-svg{
                    background:$fc;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include sc(.8rem,$fc);
                    .user-icon{
                        @include wh(0.5rem,0.75rem);
                        display:inline-block;
                        vertical-align:middle;
                        line-height:0.75rem;
                        .icon-mobile{
                            @include wh(100%,100%);
                        }
                    }
                    .icon-mobile-number{
                        display:inline-block;
                        @include sc(.57333rem,$fc);

                    }
                }

            }
            .arrow{
                @include wh(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include wh(100%,100%);
                }
            }
        }
   }
   .info-data{
        width:100%;
        background:$fc;
        box-sizing: border-box;
        ul{
            .info-data-link{
                float:left;
                width:33.33%;
                display:inline-block;
                border-right:1px solid #f1f1f1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                .info-data-top{
                    @include sc(.55rem,#333);
                    padding: .853333rem 0 .453333rem;
                    b{
                        display:inline-block;
                        @include sc(1.2rem,#f90);
                        font-weight:700;
                        line-height:1rem;
                        font-family: Helvetica Neue,Tahoma;
                    }
                }
                .info-data-bottom{
                    @include sc(.57333rem,#666);
                    font-weight:400;
                    padding-bottom:.453333rem;

                }
            }
            .info-data-link:nth-of-type(2){
                .info-data-top{
                    b{
                        color:#ff5f3e;
                    }
                }

            }
            .info-data-link:nth-of-type(3){
                border:0;
                .info-data-top{
                    b{
                        color:#6ac20b;
                    }
                }
            }
        }
   }
   .profile-1reTe{
        margin-top:.4rem;
        background:$fc;
        .myorder{
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include sc(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myorder-divsvg{
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>