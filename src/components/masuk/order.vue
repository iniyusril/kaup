<template>
    <div>
         <section id="content">
                <div class="container">
                    <div class="block-header">
                        <h2>Pesanan Anda</h2>
                    </div>
                    
                    <div class="card">
                        <div class="card-header ch-alt m-b-20">
                            <h2>Pesanan anda hari ini <small>Berikut daftar pesanan anda hari ini, Sabtu, 14 Juli 2018</small></h2>
                        </div>
                        
                        <div class="card-body" >
                            <div class="listview"  >
                                <a  class="lv-item" data-toggle="collapse"  href="#accordionRed" aria-expanded="false">
                                    <div class="media">
                                        <div class="pull-left">
                                            <i class="md md-local-shipping md-2x"></i>
                                        </div>
                                        <div class="lv-title">
                                            nama meny
                                            <small class="lv-small">
                                                <i class="md md-comment"></i> 
                                                diantar ke dept IC ya, trims
                                            </small>

                                            <div >
                                                <ul class="list-group" id="#accordionRed">
                                                    <li class="list-group-item">
                                                        <span class="badge">harga</span>
                                                        menu id-- <strong>nama_menu</strong><br />
                                                        1x harga
                                                    </li>
                                                    <li class="list-group-item">
                                                        <span class="badge">IDR harga</span>
                                                        <strong>Total Bayar</strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>    
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.size-content{
    max-width: 25px;
    max-height: 25px;
}
.content-left{
    display:inline-block;
}
.list-group{
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 5px;}
.list-group-item{padding: 3px 7px;}
.badge{background: none; color: #2196f3; font-weight: bold;}
.expandColor{
    background-color: white;
}
</style>