let encode = new Uint32Array([72, 101, 108, 108, 111, 345]);
let decoder = new TextDecoder();
console.log(decoder.decode(encode), encode);
//encoding and decoding.