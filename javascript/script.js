let arr = [];

function randomStat() {
    for (i= 0, t=6; i < t; i++){
    arr.push(Math.floor (Math.random () *16)+3);
  };
  return arr;
};
randomStat()
