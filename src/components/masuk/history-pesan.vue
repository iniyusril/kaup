<template>
    <div>
              <section id="content">
                <div class="container">
                    <div class="block-header">
                        <h2>History Pemesanan</h2>
                    </div>
                    <!-- v for here -->
                    <div class="card" v-for="(test,i) in test2" :key="test">
                        
                        
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tgl</th>
                                        <th>Pesanan</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ test.tgl_jual}}</td>
                                        <td>
                                            {{test.tenant}}<br />
                                            <small>
                                                {{test.item_order.length}} menu - <strong>{{test.total}}</strong><br />
                                                <i class="md md-check"></i> Pemesanan selesai
                                            </small>
                                        </td>
                                        <td class="text-right">
                                            <a @click="detail_history_Pesan(test.item_order,test.tenant)" class="btn btn-xs btn-info">Detail</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <!-- end v for -->
                </div>
                <h6>Pagination here</h6>
                <b-pagination align="center" :total-rows="20" v-model="currentPage" :per-page="1" @input="page(currentPage)">
                </b-pagination>
                <br>
                <div>TestcurrentPage: {{currentPage}}</div>
                <div>total page: </div>
            </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentPage:this.$store.state.page_historyOrder,
            data:'',
            detailArray:[]
        }
    },
methods:{
    detail_history_Pesan(detailArray,tenant){
        //console.log('detail ke ',i+1)
        console.log(tenant)
        console.log('aray di comp '+detailArray)
        this.$store.commit('detailHistoryOrder_mutation', {detailArray, tenant}),
        this.$router.push('/dashboard/detail_history-pesan')
    },
    page(currentPage){
        this.$store.commit('pageHistoryOrder_mutation', currentPage),
        //console.log('this on component page '+currentPage)
        this.$store.dispatch('getHistoryOrder')
        
    }
},
computed:{
    test2(){
            return this.$store.state.historyOrder
        }
}
}
</script>

<style>

</style>