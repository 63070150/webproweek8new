console.log('I am in args.js')

console.log(process.argv)//process have every file in js

const args  = process.argv.slice(2)

for (let arg of args) {
  console.log('Hello ' + arg)
}
//study again!!