<template>
  <collapsible>
    <collapsible-item v-for="task in taskDatas" :task="task" track-by="$index">
      <h5 slot="header">
        <span @click.prevent="task.select = !task.select">
          <input type="checkbox" value="" v-model.sync="task.select"></input>
          <label></label>
        </span>
        {{ task.title }}
      </h5>
      <p>{{ task.body }}</p>
      <p>
        <label>date : </label>
        <input-field type="date" :value.sync="task.regDate"></input-field>

        <label>location : </label>
        <select :value.sync="task.location" class="browser-default">
          <option v-for="location in locations" :value="location.value" v-text="location.value"></option>
        </select>

        <label>category : </label>
        <select :value.sync="task.category" class="browser-default">
          <option v-for="category in categories" :value="category.value" v-text="category.value"></option>
        </select>

      </p>
    </collapsible-item>
  </collapsiSble>
</template>

<script>
export default {
  data () {
    return {
      locations : [
        {value:'super',  text:'スーパー'},
        {value:'station',text:'駅'},
        {value:'home',   text:'自宅'}
       ],
      categories : [
        {value:'shopping', text:'shopping'},
        {value:'visit',    text:'visit'},
        {value:'other',    text:'other'}
       ]
      }
  },
  props : {
    taskDatas : Array
  },
  components:{
    'input-field' : require('vue-materialize/input-field'),
    'collapsible' : require('vue-materialize/collapsible'),
    'collapsible-item' : require('vue-materialize/collapsible-item')
  }
}
</script>
