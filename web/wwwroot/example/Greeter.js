export class Greeter {
    constructor(message) {
        this.inner = new Greeter.Inner();
        this.greeting = message;
        this.inner.field = "aaaaaaaa";
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
(function (Greeter) {
    class Inner {
        constructor() {
            this.field = "def";
        }
        method() {
            return this.field;
        }
    }
    Greeter.Inner = Inner;
})(Greeter || (Greeter = {}));
