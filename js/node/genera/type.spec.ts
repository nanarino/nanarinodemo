import _type from "./type"

console.log(_type(1))
console.log(_type(true))
console.log(_type("string"))
console.log(_type(undefined))
console.log(_type(null))
console.log(_type({}))
console.log(_type([]))
console.log(_type(new Set()))
console.log(_type(new Map()))
console.log(_type(new Date()))
console.log(_type(/(.*)/))
console.log(_type(() => {}))
console.log(_type(async function* () {}))
