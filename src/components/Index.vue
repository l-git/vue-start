<template>

<div>

<div>Index</div>

<div>

    <ul>
       <li v-for="item in cList" :key="item.path" @click="goPath(item)">{{item.name}}</li> 
    </ul>


<router-view></router-view>

</div>


    </div>

</template>


<script>
export default {

    data(){

        return {

            cList:[
                {
                    path:'/',
                    name:'Index'
                },
                {
                    path:'/c1',
                    name:'c1'
                },
                {
                    path:'/c2',
                    name:'c2'
                },
                {
                    path:'/asynComp',
                    name:'asynComp'
                },
            ]
        }
    },
    methods:{

        goPath(item){
            this.$router.push(item.path)

        }

    }



}

</script>


<style>

li:nth-child(odd) {
    color:#f00;
}

li:nth-child(even) {
    color:#0f0;
}


</style>