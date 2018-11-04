

let findTargetSumWays = (nums, S) => {
  let output = 0;

  let recursion = (i, sum) => {
    if(i === nums.length) {
      if(sum === S) {
        output ++;
      }
      return;
    }

    recursion(i+1, sum + nums[i]);
    recursion(i+1, sum - nums[i])
  }

  recursion(0,0);
  return output;
}


var findTargetSumWays = function(nums, S) {
  let dp = {};
  debugger;
  function dfs(i, sum){
      let ways = 0;
      if(dp[i+','+sum] == null){
          if(i == nums.length){
              if(sum == S){
                  return 1;
              }else{
                  return 0;
              }
          }
          let num = nums[i];

          ways += dfs(i+1, sum-num);  
          ways += dfs(i+1, sum+num);
          dp[i+','+sum] = ways;
      }else{
          ways = dp[i+','+sum];
      }


      return ways;
  }
  
  return dfs(0, 0);
};

let test = [1,1,1,1,1]
let test1 = [39,9,40,29,1,41,14,44,31,22,49,17,36,37,6,5,33,23,6,2];
// 28
let test3 = [1,1]

console.log(findTargetSumWays(test3, 0));