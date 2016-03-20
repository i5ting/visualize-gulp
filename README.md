# visualize-gulp

https://github.com/gulpjs/gulp

## design

- task tree
- task dept list
- create task
  - code
  - alias
- http-server with sqlite



## 原理

```
var gulp = require('gulp');

gulp.task('uglify', function() {
  
  console.dir(gulp.tasks);
});

gulp.task('default', ['uglify']);
```

打印出gulp tasts信息如下：

```
{ 
  uglify:{ fn: [Function],
     dep: [],
     name: 'uglify',
     args: { task: 'uglify', message: 'uglify started' },
     running: true 
  },
  default: { 
    fn: [Function], 
    dep: [ 'uglify' ], 
    name: 'default' 
  } 
}
```

另外一种做法

```
var gulp = require('gulp');
require('./gulpfile')

console.log(gulp.tasks)
```

打印如下

```
{ 
  uglify: { fn: [Function], dep: [], name: 'uglify' },
  default: { fn: [Function], dep: [ 'uglify' ], name: 'default' } 
}
```

