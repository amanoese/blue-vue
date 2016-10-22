<template>
  <nav>
    <div>
      <h2 class="container">{{ msg }}</h1>
    </div>
  </nav>
  <div class="container">
    <task :task-datas="taskDatas"></task>
  </div>
  <div class="container">
    <a class="waves-effect waves-light btn">success
      <modal :is-opened.sync="openedSuccess">
        <div class="modal-content">
          <h4>success</h4>
          <p v-for="title in selectTiles" track-by="$index">{{ title }}</p>
          <div class="modal-footer">
            <div class="btn btn-flat" @click="closeSuccess">cancel</div>
            <div class="btn btn-flat" @click="deleteTasks">ok</div>
          </div>
        </div>
      </modal>
    </a>
    <a class="waves-effect waves-light btn">delete
      <modal :is-opened.sync="openedDelete">
        <div class="modal-content">
          <h4>delete</h4>
          <h4>delete</h4>
          <p v-for="title in selectTiles" track-by="$index">{{ title }}</p>
          <div class="modal-footer">
            <div class="btn btn-flat" @click="closeDelete">cancel</div>
            <div class="btn btn-flat" @click="deleteTasks">ok</div>
          </div>
        </div>
      </modal>
    </a>
  </div>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i>
      <modal v-bind:is-opened.sync="opened">
        <div class="modal-content">
          <div class="row">
            <div class="input-field">
              <input type="text" v-model="taskTitle">
              <label>task title</label>
            </div>
            <div class="input-field">
              <input type="text" v-model="taskBody">
              <label>Detailed information</label>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn btn-flat" @click="close">cancel</div>
            <div class="btn btn-flat" @click="addTask">ok</div>
            <div class="btn btn-flat" @click="record" v-show="recordFlag">record</div>
            <div class="btn btn-flat" @click="endRecord" v-else>end record</div>
          </div>
        </div>
      </modal>
    </a>
  </div>
</template>

<script>
import Task from './Task.vue';

const communicateBM = ( path , arg , successHandler ) => {
  $.ajax({
        type : 'post',
		url : 'https://softuken2016.mybluemix.net/todo/' + path,
        data : JSON.stringify(arg),
        contentType: 'application/JSON',
        dataType : 'json',
        scriptCharset: 'utf-8'
  }).done(successHandler
  ).fail(function(data){
    console.log('error:'+JSON.stringify(data));
  });
}

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'TODO',
//      speech : webkitSpeechRecognition,
      recordFlag : true,
      opened : false,
      openedSuccess : false,
      openedDelete : false,
      taskDatas : [
        {title:'task1', body:"body1", select:false, category:"shopping", location:"スーパー"},
        {title:'task2', body:"body2", select:false, category:"shopping", location:"駅"}
      ],
      taskTitle : '',
      taskBody : ''
    }
  },
  computed : {
    selectTiles (){
      return this.taskDatas.filter(x=>x.select).map(x=>x.title);
    }
  },
  ready (){
/*      this.speech = new webkitSpeechRecognition();
      this.speech.lang = "ja";
      this.speech.addEventListener('result', (e)=>{
          this.taskTitle = e.results[0][0].transcript;
      });
*/
    // get todo list from server
    var noArg = {};
    communicateBM('list',noArg,(data)=>{
        this.taskDatas = data;
    });
  },
  methods : {
    addTask (){
      this.taskDatas.push({
        title:this.taskTitle,
        body:this.taskBody,
        select:false
      });
      this.taskTitle = '';
      this.taskBody = '';
      this.opened = false;
    },
    record (){
      //音声認識APIの使用
      //言語を日本語に設定
      this.speech.start();
      this.recordFlag = false;
    },
    endRecord (){
      this.speech.stop();
      this.recordFlag = true;
    },
    deleteTasks (){
      this.taskDatas = this.taskDatas.filter(x=>!x.select);
      this.openedSuccess = false;
      this.openedDelete = false;
    },
    closeSuccess (){
      this.openedSuccess = false;
    },
    closeDelete (){
      this.openedDelete = false;
    },
    close (){
      this.opened = false;
    }
  },
  components:{
    Task,
    'modal' : require('vue-materialize/modal')
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
