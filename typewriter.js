const sentence = "hello there from lighthouse labs\n";
let i = 1;
for (const char of sentence) {
  setTimeout(() => {
  // console.log(char)
  process.stdout.write(char);
  }, i * 50)
  i ++
}


// const { performance } = require('perf_hooks');
// performance.now()