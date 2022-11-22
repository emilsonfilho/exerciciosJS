var buff = new ArrayBuffer(500)
var view = new DataView(buff)

console.log(Math.pow(2, 16))
view.setInt32(0, 65536, true)

console.log("int8(0): " + view.getInt8(0))
console.log("int8(1): " + view.getInt8(1))
console.log("int8(2): " + view.getInt8(2))
console.log("int8(3): " + view.getInt8(3))

var int32arr = new Int32Array(buff, 0, 20)
console.log("int32arr[0]: " + int32arr[0])
console.log("int32arr[4]: " + int32arr[4])

view.setInt32(buff, 65536, false)

console.log("int8(0): " + view.getInt8(0))
console.log("int8(1): " + view.getInt8(1))
console.log("int8(2): " + view.getInt8(2))
console.log("int8(3): " + view.getInt8(3))