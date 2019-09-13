export class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
    this.inner.field = "aaaaaaaa";
  }

  public greet() {
    return "Hello, " + this.greeting;
  }

  public inner: Greeter.Inner = new Greeter.Inner();
}
export namespace Greeter {
  export class Inner {
    public field: string = "def";

    public method():string{
      return this.field;
    }
  }
}
