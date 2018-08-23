<template>
  <div>
      <section id="content">
                <div class="container">
                    <div class="block-header">
                        <h2>Keranjang Belanja</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="mini-charts-item bgm-cyan">
                                <div class="clearfix">
                                    <div class="chart stats-bar"></div>
                                    <div class="count">
                                        <small>Saldo Anda</small>
                                        <h2><i class="md md-local-atm"></i> IDR {{profile.profile.deposit}}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="col-sm-6 col-md-6" id="info">
                            <div class="alert alert-danger" role="alert">Terdapat 1 pesanan yang belum anda selesaikan, segera selesaikan pesanan dibawah ini!</div>
                        </div>
                        <div  class="col-sm-6 col-md-6" id="basket">
                            <div class="alert alert-info" role="alert">Belum ada pesanan anda di keranjang, silahkan pesan menu di sini<br /><a @click="food()" class="btn btn-xs btn-success">Pesan menu</a></div>
                        </div>
                    </div>
                    <router-view></router-view>
                </div>
                
            </section>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    computed:{
        ...mapState(['order','profile']),
        ...mapGetters(['jumlah_keranjang'])
    },
    data () {
      return {
        alert:true      }
    },
    methods: {
        food(){
            this.$router.push('/dashboard/menu')
        },
        
    },
  }
</script>