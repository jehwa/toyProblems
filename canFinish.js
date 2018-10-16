

let canFinish = (numCourses, prerequisites) => {
  let obj = {};
  for(let i = 0; i < prerequisites.length; i ++) {
      obj[prerequisites[i][0]] = [prerequisites[i][1], false];
  }
  
  let output = false;
  let passed = 0;

  let recursion = (course, count) => {
    // debugger;
      if(!obj[course]) {
        if(count <= numCourses) {
          output = true;
        }
        return;
      }

      if(count > numCourses) {
        return;
      }
      if(!obj[course][1]) {
          obj[course][1] = true;
          passed++;
          recursion(obj[course][0], count+1);
      }      
  }
  
  while(passed < prerequisites.length) {
    // debugger;
    for(let key in obj) {
      if(!obj[key][1]) {
        recursion(key, 1);
      }
    }
  }
  
  return output;

};

let test = [[1,0], [0,1], [3,2]];

let test1 = [[1,0]];

console.log(canFinish(2, test1));