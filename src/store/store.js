import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
import VuexPersist from 'vuex-persistedstate';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
import router from '../router'

export const axs = axios.create({
    baseURL: 'http://172.16.47.3:4000/api',
    headers:  {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  });

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.sessionStorage,
    reducer:state=>({
        menu:state.menu,
        profile:state.profile,
    })
})
export const store = new Vuex.Store({
  plugins: [vuexLocalStorage],
  state:{
    profile:{},//menyimpan data saat login
    menu:[], //menyimpan dari data tenant
    order:[],
    historyOrder:'',
    page_historyOrder:1,
    totalPage : 0,
    detailHistory:'',
    detailTenant:''
  },
  getters:{
    jumlah_keranjang:state=>{
        return state.order.length
    }
  },
  mutations:{
    //1
    logout_mutation: (state) =>
        {
            state.keranjang = [],
            state.profile = [],
            state.menu = [],
            state.order = [],
            this.$destroy
        },
    //2
    login_mutation:(state, response)=>
        {
            state.profile = response
            localStorage.setItem("token",response.access_token)
            router.push('/dashboard')
        },
    //3
    order_mutation:(state,obj)=>
        {
            let reformat = 
            {
                item_order: []
            }
            //let litle adalah objek kosong yang nantinya akan dimasukkan ke dalam array item order di reformat
            let litle = {}
            reformat.customer_id = state.profile.profile.customer_id
            reformat.tenant_id = obj.tenant_id
            reformat.tenant_rmq_queue_name = obj.tenant_rmq_queue_name
            reformat.catatan_order = obj.catatan_order
            reformat.mesin_id = state.profile.profile.mesin_id
            reformat.nama_tenant = obj.nama_tenant

            litle.nama_menu = obj.nama_menu
            litle.harga = obj.harga
            litle.menu_id = obj.menu_id
            litle.jumlah = obj.jumlah
            if(state.order.length == 0)
            {
                //jika baru
                reformat.item_order.push(litle)
                state.order.push(reformat)
            }
            else {
                //jika tidak kosong maka dia cek
            Array.from(state.order).forEach(item=>{
                    if (item.tenant_id == reformat.tenant_id)
                    {item.item_order.push(litle)}
                    else{
                        reformat.item_order.push(litle)
                        state.order.push(reformat)
                    }
                })
            }
    },
    //4
    Jumlah_mutation:(state,obj)=>
    {
        state.order[obj.index].item_order[obj.key].jumlah = parseInt(obj.jumlah)
    },
    //5
    catatan_mutation:(state, obj)=>
    {
        state.order[obj.index].catatan_order = obj.catatan_order
    },
    //6
    batalkan_mutation:(state,index)=>
    {
        state.order.remove(index)
        router.push('/dashboard/menu')
    },
    //7
    delmenu:(state,obj)=>
    {
        state.order[obj.index].item_order.remove(obj.key)
    },
    //8
    getAll_mutation:(state,e)=>
    {
        state.menu.push(e)
    },
    //9
    historyOrder_mutation:(state,response)=>{
        state.totalPage=response.status.pages_count,
        state.historyOrder= response.results
        //console.log('tot page : '+response.status.pages_count)
        //console.log('test json'+state.historyOrder)
    },
    //10
    pageHistoryOrder_mutation:(state,currentPage)=>{
         console.log('this in store page '+currentPage)
        // let page = currentPage
        // console.log('this let page in store page '+page)
        state.page_historyOrder = currentPage;
    },
    //11
    detailHistoryOrder_mutation:(state,{detailArray, tenant})=>{
        state.detailHistory = detailArray,
        state.detailTenant = tenant
        console.log('aray di vuex '+state.detailHistory)
        console.log('tenant di vuex '+tenant)
        //console.log(state.detailTenant)
    }

  },
  actions:{
      //1
    login:({commit, state}, auth) =>
        {
            axs.post('/auth/access_token',auth).then(response =>commit('login_mutation', response.data))
        },
        //2
    orderSave:({state,commit},index) =>
    {
        let wrap_array = []
        wrap_array.push(state.order[index])
        axs.post('order/save',wrap_array)
            .then(res =>
                {console.log(res)
                router.push('/dashboard/menu')
            })
            .catch(err =>console.error(err))
    },
    //3
    getAll:({state,commit})=>
    {
        let tenant
        Promise.all([
            axs.get('/tenant/get_all').then(r=>tenant = r.data.results)])
            .then(([ten])=>{
                Array.from(ten).forEach((item)=>{
                    axs.get('/menu/get_all?tenant_id='+item.tenant_id).then(res=>{
                        item.menu = res.data.results
                        commit('getAll_mutation',item)
                    }) 
                })
            })
    },
    //4
    getHistoryOrder:({commit,state})=>{
        axs.get('/order/get_history_order_with_pagging?customer_id='+state.profile.customer_id+'&include_detail=true&page_number='+state.page_historyOrder+'&page_size=5')
        .then(response =>{
            commit('historyOrder_mutation',response.data)
        })
            console.log('page '+state.page_historyOrder)

        }
    
   
  }
})