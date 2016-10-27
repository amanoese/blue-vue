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
        date : <input type="date" v-model.sync="task.date"></input>
        <select v-model.sync="task.location">
          <option value="super">スーパー</option>
          <option value="station">駅</option>
          <option value="home">自宅</option>
        </select>
		<label>location : </label>
        <select v-model.sync="task.category">
          <option value="shopping">shopping</option>
          <option value="visit">visit</option>
          <option value="other">other</option>
        </select>
		<label>category : </label>
      </p>
    </collapsible-item>
  </collapsiSble>
</template>

<script>
export default {
  props : {
    taskDatas : Array
  },
  components:{
    'collapsible' : require('vue-materialize/collapsible'),
    'collapsible-item' : require('vue-materialize/collapsible-item')
  }
}
</script>
