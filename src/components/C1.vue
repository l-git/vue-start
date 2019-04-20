<template>
  <div class="example">
    <div>
    {{ msg }}
    </div>

    <div>

      <el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>

<div>

<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

</div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!',
      value1: true,
        value2: true,
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>