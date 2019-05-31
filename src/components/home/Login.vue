<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">能耗综合分析平台</div>
            <el-form :model="form"  ref="form" label-width="80px" class="ms-content">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" placeholder="请输入密码" v-model="form.password" @keyup.enter.native="submitForm()">
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
		name:'',
        data: function(){
            return {
                form: {
                    username: 'lhx',
                    password: '123456'
                }
                
            }
        },
        methods: {
            submitForm() {
                var url = this.baseUrl+"/baseUser/login"
                var data = {username:this.form.username,password:this.form.password};
                this.$axios.post(url,this.$qs.stringify(data),{
                	headers: {
                		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                	}
                }).then(res=>{
					var obj = res.data;
					if(obj){
						this.$store.state.loginFlag=true;
						// 跳转到首页
						this.$router.push({name:'welcome',params:{obj:obj}});
						this.$store.commit("set",1);
					
					}else{
						this.$message("用户名或者密码不正确");
					}
                })
            }
        }
    }
</script>

<style>
    .login-wrap{
        position: relative;
        width:100%;
        height:600px;
        background-image: url(../../assets/bg.jpg);
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: gray;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>