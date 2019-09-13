import {JSONConverter} from '../JSONConverter'
import {Greeter} from './Greeter'

let c = new JSONConverter<Greeter>();
let src = new Greeter('aaa');
src.inner.field = "h";
console.log(src);
console.log(src.greet());
console.log(src.inner.method());

console.log("--シリアライズ対象--");
let jsonString = c.serialize(src);
console.log(jsonString);

console.log("--デシリアライズ--");
let g = c.deserialize(jsonString, new Greeter(''));
console.log(g);
console.log(g.greet());
console.log(g.inner.method());

console.log("--文字列からデシリアライズ--");
let jsonString2 = '{"inner":{"field":"Hai!"},"greeting":"bbb"}';
console.log(jsonString2);
let g2 = c.deserialize(jsonString2, new Greeter(''));
console.log(g2);
console.log(g2.greet());
console.log(g2.inner.method());
