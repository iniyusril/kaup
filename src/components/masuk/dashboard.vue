<template>
    <div>
         <!--section dibawah ini digunakan untuk dashboard fix -->
            <section id="content">
                <div class="container">
                    <div class="block-header">
                        <h2>Dashboard Pengguna</h2>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h2>Informasi <small>Terakhir anda login adalah 2 hari yang lalu, tanggal 13 Juli 2018 jam 08:52</small></h2>
                        </div>
                    </div>

                    <div class="mini-charts">
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <div class="mini-charts-item bgm-cyan">
                                    <div class="clearfix">
                                        <div class="chart stats-bar"></div>
                                        <div class="count">
                                            <small>saldo Anda</small>
                                            <h2><i class="md md-local-atm"></i> IDR {{saldo}}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-4">
                                <div class="mini-charts-item bgm-bluegray">
                                    <div class="clearfix">
                                        <div class="chart stats-line-2"></div>
                                        <div class="count">
                                            <small>Pesanan anda</small>
                                            <h2>1 Selesai, 2 Proses</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-4">
                                <div class="mini-charts-item bgm-lightgreen">
                                    <div class="clearfix">
                                        <div class="chart stats-bar-2"></div>
                                        <div class="count">
                                            <small>Menu hari ini</small>
                                            <h2><i class="md md-local-restaurant"></i> 58</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
    </div>
</template>

<script>
export default{
    data(){
        return{
            saldo:this.$store.state.profile.profile.deposit
        }
    },
    beforeRouteEnter(to, from, next) {
      if(false){
        next();
      }else{
        next(false);
      }
    }
}
</script>
