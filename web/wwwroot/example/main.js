import { JSONConverter } from '../JSONConverter';
import { Greeter } from './Greeter';
let c = new JSONConverter();
let src = new Greeter('aaa');
src.inner.field = "h";
DocmentWrite("--シリアライズ対象--");
console.log(src);
DocmentWrite(src.greet());
DocmentWrite(src.inner.method());
DocmentWrite("--シリアライズ--");
let jsonString = c.serialize(src);
DocmentWrite(jsonString);
DocmentWrite("--デシリアライズ--");
let g = c.deserialize(jsonString, new Greeter(''));
console.log(g);
DocmentWrite(g.greet());
DocmentWrite(g.inner.method());
DocmentWrite("--文字列からデシリアライズ--");
let jsonString2 = '{"inner":{"field":"Hai!"},"greeting":"bbb"}';
DocmentWrite(jsonString2);
let g2 = c.deserialize(jsonString2, new Greeter(''));
console.log(g2);
DocmentWrite(g2.greet());
DocmentWrite(g2.inner.method());
function DocmentWrite(target) {
    // console出力
    console.log(target);
    // ドキュメント出力
    let div = document.createElement("div");
    div.textContent = target;
    document.body.appendChild(div);
}
