function calculateMinCost() {
    //your code here
    const dataString = document.getElementById('rope-lengths').value;
        // const dataString = '4, 2, 7, 6, 9';
      const arr = dataString.split(',').map(ele => parseInt(ele));
      let cost = 0;
      
      while(arr.length > 1) {
          let tempCost = 0;
          tempCost += findRemoveMin(arr);
          tempCost += findRemoveMin(arr);
  
          cost += tempCost;
          arr.push(tempCost);
      }
  
    //   if(pq.size() > 1) cost = -1;
        document.getElementById('result').textContent = cost;
        // console.log(cost);
  }  
  
  function findRemoveMin(arr) {
      let n = arr.length;
      let minVal = Number.POSITIVE_INFINITY;
      let minIdx = -1;
  
      for(let i = 0; i < n; i++) {
          if(arr[i] < minVal) {
              minVal = arr[i];
              minIdx = i;
          }
      }
  
      arr.splice(minIdx, 1);
      return minVal;
  }

  // calculateMinCost();