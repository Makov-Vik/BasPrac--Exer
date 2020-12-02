let obj = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    },
  }

function count(){
    let s;
    for (s in obj){
        console.log(s, obj[s].length);
        s++;
        
    }
}
console.log(count(obj));
