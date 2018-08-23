<template>
      <section id="content">
                <div class="container">
                    <p v-for="detail in dataDetail" :key="detail">{{ detail }}</p>
                    <small>{{ dataTenant }}</small><br/>
                    <small>total : {{ total }}</small>
                    <div class="block-header">
                        <h2>Detail Pesanan</h2>
                    </div>
                    <div class="card">
                        <div class="card-header ch-alt m-b-20">
                            <h2>IDR {{ total }}</h2><small>Pesanan No.306<br />14 September 2018</small>
                        </div>
                        <div class="card-body">
                            <h5>
                                {{ dataTenant }}
                                <br />
                                <small><i class="md md-comment"></i> pesan diantar ke ruang dosen ya</small>    
                            </h5>
                        
                            <ul class="list-group">
                                <li class="list-group-item" v-for="detail in dataDetail" :key="detail">
                                    <span class="badge">IDR {{ detail.sub_total }}</span>
                                    0501 <strong>{{ detail.menu }}</strong><br />
                                    {{ detail.jumlah }} x {{ detail.harga }}
                                </li>

                                <li class="list-group-item">
                                    <span class="badge">IDR {{ total }}</span>
                                    <strong>Total Bayar</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <text class="c-green">
                                        <i class="md md-check"></i>
                                        08:23 &raquo;
                                    </text>
                                    Pemesanan selesai
                                </li>
                                <li class="list-group-item">
                                    <text class="c-teal">
                                        <i class="md md-local-shipping"></i>
                                        08:18 &raquo;
                                    </text>
                                    Proses antar/ambil makanan
                                </li>
                                <li class="list-group-item">
                                    <text class="c-orange">
                                        <i class="md md-sync"></i>
                                        08:14 &raquo;
                                    </text>
                                    Proses pengolahan makanan
                                </li>
                                <li class="list-group-item">
                                    <text class="c-deeporange">
                                        <i class="md md-assignment"></i>
                                        08:14 &raquo;
                                    </text>
                                    Pemesanan
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center">
                        <a data-toggle="modal" href="#modalSend" class="btn btn-info">
                            <i class="md md-send"></i> 
                            Kirim Nota
                        </a>
                    </div>
                </div>
            </section>
</template>

<script>
export default {
    computed:{
        dataDetail(){
            return this.$store.state.detailHistory
        },
        dataTenant(){
            return this.$store.state.detailTenant
        },
        total(){
            console.log('test detail'+this.$store.state.detailHistory);
            return this.$store.state.detailHistory.reduce(function(total, detail){

            return total + detail.sub_total; 
            },0);
        }
    }
}
</script>

<style scoped>
h5{padding: 0 10px }
            .list-group{
                margin-bottom: 5px;
                margin-top: 5px;
            }
            .list-group-item{border-top: 1px solid #e9e9e9; 
                border-left: none; border-right: none; border-bottom: none}
            .card-header{padding-bottom: 10px !important; margin-bottom: 0 !important}
            .badge{background: none; color: #2196f3; font-weight: bold;}

</style>