<template>
   <div> 
      <section id="content">
         <div class="container">
            <div class="block-header">
               <h2>Menu tersedia</h2>
            </div>
            <div class="card"  v-for="tenant in menu">
               <div class="card-body">
                  <table class="table">
                     <thead>
                        <tr><th colspan="4">{{tenant.tenant}}</th></tr>
                     </thead>
                     <tbody>
                        <tr v-for="menu in tenant.menu">
                           <td>{{menu.nama_menu}}</td>
                           <td class="text-right">{{menu.harga}}</td>
                           <td class="text-right">
                              <a class="btn btn-xs btn-info" href="#modalForm"  data-toggle="modal" @click="on_selected(tenant.tenant_id,tenant.rmq_queue_name,menu.menu_id, menu.nama_menu, tenant.tenant,menu.harga)">Pesan</a>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>
      <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-hidden="true">
         <div class="modal-dialog modal-sm">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title">Jumlah pesanan</h4>
               </div>
               <div class="modal-body">
                  <div class="form-group">
                     <div class="fg-line">
                        <div class="select">
                           <select class="form-control" v-model="objek.jumlah" >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="modal-footer">
                  <a class="btn btn-link" data-dismiss="modal" data-type="success" data-from="top" data-align="center" data-icon="fa fa-comments" id="order"  @click="simpan()">Simpan</a>
                  <button type="button" class="btn btn-link" data-dismiss="modal" >Batal</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template> 
<script>
export default {
    data () {
        return {
        tenant:'',
        menu:this.$store.state.menu,
        objek:{jumlah:1}
        } 
    },
    methods:{
        on_selected:function(a,b,c,d,e,f){
          //a tenant id 
          //b rmq 
          //c menu id
          //d nama menu
          //e nama tenant
          //f menu harga
          this.objek.tenant_id = a
          this.objek.tenant_rmq_queue_name = b
          this.objek.menu_id = c
          this.objek.nama_menu =d
          this.objek.nama_tenant =e
          this.objek.harga =f
          this.objek.catatan_order ='dianter kemana pedes nggak ?'
        },   
        simpan:function(){
          this.$store.commit('order_mutation', this.objek)
          this.objek.jumlah = 1
        }
    }
  }
</script>
