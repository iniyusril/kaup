<template>
<body class="login-content">
        <!-- Login -->
        <div class="lc-block toggled" id="l-login">
                    <h3>Login pengguna kantin<br />Universitas Amikom</h3>
                      <div class="input-group m-b-20">
                      <span class="input-group-addon"><i class="md md-person"></i></span>
                        <div class="fg-line">
                        <input type="text" class="form-control" v-model="auth.identitasId" placeholder="Username">
                        </div>
                      </div>
            
                      <div class="input-group m-b-20">
                      <span class="input-group-addon"><i class="md md-lock"></i></span>
                        <div class="fg-line">
                        <input type="password" class="form-control" v-model="auth.password" placeholder="Password">
                        </div>
                      </div>
                <div class="clearfix"></div>    
            
            
            <a @click="login()" class="btn btn-login btn-danger btn-float">
                <i class="md md-arrow-forward"></i>
            </a>

        </div>
</body>
</template>
<script>
export default {
     data () {
    return {
        auth:{
        "identitasId": "02.02.4113",
        "password": "12345"
        }
    }
  },
    methods:{
    login()
      {
        this.$store.dispatch('login',this.auth)
        this.$store.dispatch('getAll')
      }
    }
}
</script>