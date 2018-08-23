<template>
    <div>
           <header id="header">
            <ul class="header-inner">
                <!-- tiga titik atas pengganti icon-->
                <li id="menu-trigger" data-trigger="#sidebar">
                    <div class="line-wrap">
                        <!--bootstrap js -->
                        <div class="line top"></div>
                        <div class="line center"></div>
                        <div class="line bottom"></div>
                    </div>
                </li>
                
                <!--tulisan amikom jika xs maka hidden-->
                <li class="logo hidden-xs"><a @click="dashboard()">Kantin Universitas Amikom</a></li>

                <li class="pull-right">
                <ul class="top-menu">
                    <!--toggle switcher -->
                    <li id="toggle-width">
                        <div class="toggle-switch">
                            <input id="tw-switch" type="checkbox" hidden="hidden">
                            <label for="tw-switch" class="ts-helper"></label>
                        </div>
                    </li>
                    
                    
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="tm-notification"><i class="tmn-counts">1</i></a>
                        <div class="dropdown-menu dropdown-menu-lg pull-right">
                            <div class="listview" id="notifications">
                                
                                <div class="lv-header">
                                    <!--tulisan notifikasi atas -->
                                    Notifikasi
                                </div>

                                <div class="lv-body c-overflow">
                                    <a class="lv-item">
                                        <div @click="goto_order()" class="media">
                                            <div class="pull-left">
                                                <!-- ini icon kecil di samping kiri -->
                                                <i class="md md-local-shipping md-2x"></i>
                                            </div>
                                            <div class="media-body">
                                                <div class="lv-title">nama menu </div>
                                                <small class="lv-small">Proses antar makanan</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a data-toggle="dropdown" class="tm-basket"><i class="tmn-counts">{{jumlah_keranjang}}</i></a>
                        <div class="dropdown-menu dropdown-menu-lg pull-right">
                            <div class="listview" id="notifications">

                                <div class="lv-header">Keranjang belanja</div>
                                
                                <div class="lv-body c-overflow" v-for="(n,index) in order">
                                    <a class="lv-item">
                                        <div class="media"  @click="goto_keranjang(index)" >
                                            <div class="pull-left"><i class="md md-local-restaurant md-2x"></i></div>
                                            <div class="media-body" >
                                                <div class="lv-title">{{n.nama_tenant}} </div>
                                                <small class="lv-small" v-for="val in n.item_order">{{val.jumlah}}-{{val.nama_menu}} - <strong>Rp. {{val.harga}}</strong></small>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </li>
                    
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="tm-settings"></a>
                        <ul class="dropdown-menu dm-icon pull-right">
                            <li><a><i class="md md-person"></i> Profil Pengguna</a></li>
                            <li><a><i class="md md-settings"></i> Pengaturan</a></li>
                            <li><a @click="logout()"><i class="md md-lock"></i> Logout</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
            </ul>
            
        </header>

        <!--dibawah ini adalah kodingan untuk sidebar-->
        <section id="main">
            <aside id="sidebar">
                <div class="sidebar-inner c-overflow">
                    <div class="profile-menu">
                        <a>
                            <div class="profile-pic">
                                <img src="@/assets/img/youravatar.png" alt="foto profile">
                            </div>
                            <div class="profile-info">{{profile.profile.customer}}</div>
                        </a>                        
                    </div>
                    <ul class="main-menu">
                        <li><a @click="dashboard()"><i class="md md-home"></i> Dashboard</a></li>
                        <li><a @click="goto_order()"><i class="md md-assignment"></i> Pesanan Anda</a></li>
                        <li><a @click="food()"><i class="md md-local-restaurant"></i> Menu Tersedia</a></li>
                        <li><a @click="deposite()"><i class="md md-account-balance-wallet"></i> History Deposit</a></li>
                        <li><a @click="historyPesan()"><i class="md md-history"></i> History Pemesanan</a></li>
                    </ul>
                </div>
            </aside>
        </section>
    </div>
</template>

<script>
import {mapState,mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['jumlah_keranjang']),
        ...mapState(['order','profile']),
    },
    methods:{
    dashboard(){
        this.$router.push('/dashboard')
    },
    goto_order(){
        this.$router.push('/dashboard/pesanan')
    },
    food(){
        this.$router.push('/dashboard/menu')
    },
    deposite(){
        this.$router.push('/dashboard/history_Deposit')
    },
    historyPesan(){
        this.$router.push('/dashboard/history_Pesan')
    },
    logout(){
        this.$router.push('/')
        this.$store.commit('logout_mutation')
    },
    goto_keranjang(index){
        let indx = index
        this.$router.push('/dashboard/keranjang/detail_keranjang/'+ indx)
    }
}
}
</script>
