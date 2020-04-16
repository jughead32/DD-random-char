let arr = [];

function randomStat() {
    for (i= 0, t=6; i < t; i++){
    arr.push(Math.floor (Math.random () * 16)+ 3);
  };

document.getElementById('str').innerHTML = arr[Math.floor(Math.random()* 6) + 1];
document.getElementById('dex').innerHTML = arr[Math.floor(Math.random()* 6) + 1];
document.getElementById('con').innerHTML = arr[Math.floor(Math.random()* 6) + 1];
document.getElementById('int').innerHTML = arr[Math.floor(Math.random()* 6) + 1];
document.getElementById('wis').innerHTML = arr[Math.floor(Math.random()* 6) + 1];
document.getElementById('char').innerHTML = arr[Math.floor(Math.random()* 6) + 1];

};
