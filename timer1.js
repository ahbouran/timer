const args = process.argv.slice(2);
let result = [];
args.forEach(element => result.push(Number(element)))
result.sort(function(a, b) {
  return a - b;
  });


for (let num of result) {
  if (!Number.isInteger(num)) {
    throw "Error"
  } else if (num < 0) {
    continue
  } else {
    setTimeout(() => 
    process.stdout.write('\x07')

    , num * 1000) 
    //console.log("delay: ", num * 1000)
    }
  }


