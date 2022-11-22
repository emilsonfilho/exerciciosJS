var sayings = new Map(); console.log(sayings)
sayings.set("dog", "woof"); console.log(sayings)
sayings.set("cat", "meow"); console.log(sayings)
sayings.set("elephant", "toot"); console.log(sayings)
console.log(sayings.size)
sayings.get("fox")
console.log(sayings.has("bird"))
sayings.delete("dog"); console.log(sayings)
console.log(sayings.has("dog"))

for (var [key, value] of sayings) {
  console.log(key + " goes " + value)
}

sayings.clear()
console.log(sayings)
console.log(sayings.size)

const obj = {
  key: "value"
}
console.log(obj)