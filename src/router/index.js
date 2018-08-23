import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//form
import _dockForm from '../components/form/_dock-form'
import login from '../components/form/login'

//masuk
const _dockMasuk = resolve =>{
  require.ensure(['../components/masuk/_dock-masuk'],()=>{
    resolve(require('../components/masuk/_dock-masuk'));
  });
};
const dashboard = resolve =>{
  require.ensure(['../components/masuk/dashboard'],()=>{
    resolve(require('../components/masuk/dashboard'));
  });
};
const deposite = resolve =>{
  require.ensure(['../components/masuk/deposite'],()=>{
    resolve(require('../components/masuk/deposite'));
  });
};
const food = resolve =>{
  require.ensure(['../components/masuk/food'],()=>{
    resolve(require('../components/masuk/food'));
  });
};
const historyPesan = resolve =>{
  require.ensure(['../components/masuk/history-pesan'],()=>{
    resolve(require('../components/masuk/history-pesan'));
  });
};
const order = resolve =>{
  require.ensure(['../components/masuk/order'],()=>{
    resolve(require('../components/masuk/order'));
  });
};
const detail_history_Pesan = resolve =>{
  require.ensure(['../components/masuk/detail_history-pesan'],()=>{
    resolve(require('../components/masuk/detail_history-pesan'));
  });
};
const keranjang = resolve =>{
  require.ensure(['../components/masuk/keranjang'],()=>{
    resolve(require('../components/masuk/keranjang'));
  });
};

const detail_keranjang = resolve =>{
  require.ensure(['../components/masuk/detail_keranjang'],()=>{
    resolve(require('../components/masuk/detail_keranjang'));
  });
};

//import warn from '../components/umum/warn'
export default new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      redirect:'/'
    },
    //form
    {
      path:'/',
      name:'login',
      component:login,
    },
    {
      path:'/dashboard',
      name:'_dockMasuk_dashboard',
      component:_dockMasuk,

      children:[
        {
        path:'/dashboard/',
        name:'dashboard',
        component:dashboard,
        beforeEnter:(to,from,next) =>{
          console.log('inside route setup');
          next();
        }
        },
        {
          path:'/dashboard/pesanan',
          name:'order',
          component:order,
        },
        {
          path:'/dashboard/menu',
          name:'food',
          component:food,
        },
        {
          path:'/dashboard/history_Deposit',
          name:'history-deposit',
          component:deposite,
        },
        {
          path:'/dashboard/history_Pesan',
          name:'history-pesan',
          component:historyPesan,

        },
        {
          path:'/dashboard/detail_history-pesan',
          name:'detail_history_Pesan',
          component:detail_history_Pesan,
        },
        {
          path:'/dashboard/keranjang',
          name:'keranjang',
          component:keranjang,
          children:[
            {
              path:'/dashboard/keranjang/detail_keranjang/:index',
              component:detail_keranjang
            }
            ]
        },

    ]
    }
  ]
})
