<template>
	<div>
			<div class="card" id="order">
                        <div class="card-body">
                            <div class="listview" >
                                <div class="lv-item">
                                    <div class="media">
                                        <div class="pull-left">
                                            <i class="md md-local-restaurant md-2x"></i>
                                        </div>
                                        <div class="lv-title">
                                            {{nama_tenant}}
                                            <small class="lv-small">
                                                <i class="md md-comment"></i> 
                                                {{catatan_order}}<br />
                                                <a data-toggle="modal" href="#modalNarrower"><i class="md md-edit"></i> Ubah catatan</a>
                                            </small>                                            
                                        </div>
                                        <ul class="list-group">
                                            <li class="list-group-item" v-for="(val,key) in item_order">
                                                <span class="badge"></span>
                                                 <strong>{{val.nama_menu}}</strong><br />
                                                {{val.jumlah}} x {{val.harga}}<br />
                                                <small>
                                                    <a @click="keyGetter(key)" href="#modalForm" data-toggle="modal"><i class="md md-edit"></i> Ubah jumlah</a> :: 
                                                    <a  @click="alertDisplay(key)" id="sa-warning1"><i class="md md-cancel"></i> Hapus</a>
                                                </small>
                                            </li>
                                        </ul>
                                    </div>
                                    <div >
                                            <ul class="list-group" >
                                                <li class="list-group-item">
                                                    <span class="badge">IDR {{total}}</span>
                                                    <strong>Total Bayar</strong>
                                                </li>
                                            </ul>
                                            <div class="text-right">
                                            <button class="btn btn-warning btn-xs" id="sa-warning3" @click="batalkan()">Batalkan</button>
                                            <a class="btn btn-success btn-xs" @click="proses()">Proses</a>
                                            </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
			</div>
		
		<!--modal narrow-->
		<div class="modal fade" id="modalNarrower" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-sm">
                 <div class="modal-content">
                   <div class="modal-header"><h4 class="modal-title">ubah catatan</h4></div>
                   <div class="modal-body">
                     <div class="fg-line">
                        <input type="text" v-model="catatan_order" class="form-control" placeholder="dianter kemana neh ? pedes kagak ?">
                    </div>
                 </div>
               
                <div class="modal-footer">
                  <a @click="catatan()" class="btn btn-link" data-dismiss="modal" data-type="success" data-from="top" data-align="center" data-icon="fa fa-comments" id="order" >Simpan</a>
                  <button type="button" class="btn btn-link" data-dismiss="modal" >Batal</button>
                </div>
                </div>
             </div>
        </div>
        <!--modal jumlah-->
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
                           <select class="form-control" v-model="jumlah" >
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
                  <a class="btn btn-link" data-dismiss="modal" @click="ubah()" data-type="success" data-from="top" data-align="center" data-icon="fa fa-comments" id="order" >Simpan</a>
                  <button type="button" class="btn btn-link" data-dismiss="modal" >Batal</button>
               </div>
            </div>
         </div>
      </div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
	export default {
    computed:{...mapState(['order'])},
    data(){
      return{
        nama_tenant:'',
        key:'',
        catatan_order:'',
        jumlah:1,
        item_order:'',
        total:0,
        index:this.$route.params.index,
        saldo:this.$store.state.profile.profile.deposit
      }
    },
    watch:{
        '$route'(to,from){
            this.index = to.params.index
            this.item_order = this.$store.state.order[this.index].item_order
            this.catatan_order =this.$store.state.order[this.index].catatan_order
            this.nama_tenant = this.$store.state.order[this.index].nama_tenant
        }
    },
    mounted(){
      this.catatan_order =this.$store.state.order[this.index].catatan_order
      this.nama_tenant = this.$store.state.order[this.index].nama_tenant
      this.item_order = this.$store.state.order[this.index].item_order
      Array.from(this.item_order).forEach(item=>{this.total = this.total  + parseInt(item.jumlah * item.harga)}) 
    },
	methods:{
		proses(){
            if(this.total>this.saldo){
                this.$swal({
                title: 'saldomu gak cukup',
                text: "diisi sek kono",
                type: 'warning',
                })
            }
            else{
                this.$store.dispatch('orderSave', this.index)    
            }
            
        },
        keyGetter(key){this.key = key},
        ubah(){
            let obj ={}
                obj.index = this.index
                obj.key = this.key
                obj.jumlah = this.jumlah
             this.$store.commit('Jumlah_mutation',obj)
        },
        catatan(){
            let obj = {}
            obj.index = this.index
            obj.catatan_order = this.catatan_order
            this.$store.commit('catatan_mutation', obj)
        },
        batalkan(){
             this.$swal({title: 'temenan kie ra sido',text: "uwes yakin ?",type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus temenanan !'})
                .then((result) => {
                if (result.value) {
                    this.$swal('TERHAPUS!','Pesanan berhasil dihapus.','success')
                    this.$store.commit('batalkan_mutation',this.index)
            }
        });
            
        },
        //Sweeet Alert2
        alertDisplay(key){
         let obj ={}
                obj.index = this.index
                obj.key = key
          this.$swal({
            title: 'Hapus pesan ini',
            text: "Apakah anda yakin ingin menghapusnya?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'YA, HAPUS!'
          }).then((result) => {
            if (result.value) {
              console.log(obj)
              this.$swal(
                'TERHAPUS!',
                'Pesanan berhasil dihapus.',
                'success')
              this.$store.commit('delmenu',obj)
            }
        });
        }
		},
        
	}
</script>
<style>
/* swall */
.swal2-confirm{
  background-color: #00BCD4 !important;
}
.swal2-cancel{
  background-color: #FC575E !important;
}
</style>