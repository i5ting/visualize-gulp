require('./gulpfile')

var gulp = require('gulp');

console.log(gulp.tasks)

function main(){
  for(var task_name in gulp.tasks){
    one_task(gulp.tasks[task_name]);
  }
}

function one_task(task){
  console.log("\n" + task.name)
  console.dir(""+task.fn)
  for(var attr in task){
    if (attr == "dep" && task[attr]!="") {
      console.log("  - " + task[attr])
    }
  }
}

main();