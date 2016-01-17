module Experiment {
  interface Person {
    firstname: string;
    lastname: string;
    age?: number; // optional field
    // middlename: string; // will cause error, as user below does not have this field
  }

  interface Teacher extends Person {
    school: string;
    subject: string;
  }

  interface American {
    isRepublican: boolean;
  }

  export interface AmericanTeacher extends Teacher, American {
    hasGraduateDegree: boolean;
  }


  function greeter(person: Person) {
    return "Hello, " + person.firstname;
  }

  var user: Person = {
    firstname: "Jane",
    lastname: "Doe"
  };
  document.body.innerHTML = greeter(user);

  var number = 2;
  // Compiler error, generated .js file still has it
  // greeter(number);

  var americanTeacher: AmericanTeacher = {
    lastname: "John",
    firstname: "Doe",
    isRepublican: false,
    hasGraduateDegree: false,
    school: "My School",
    subject: "Math"
  }

  class Student {
    fullname: string;
    public person: Person;

    constructor(person: Person, public age) {
      this.person = person;
      this.fullname = person.firstname + " " + person.lastname;
    }
  }

  var list: Array<number> = [1, 2, 3];

  enum Color { Red = 1, Green, Blue };
  var colorName: string = Color[2];
  alert(colorName);

  var color: Color = Color.Blue;
  var a = Color.Red;
  a = 3;
  // OK, enum same as number? no range check
  color = 3;
  // Error:
  // color = "string"

  var notSure: any;

  function warnUser(): void {
    alert("This is my warning message");
  }

  // function type
  export interface CopyFunction {
    (source: string, dest: string): boolean;
  }

  var myCopyFunction: CopyFunction = function(src: string, dest: string): boolean {
    return false;
  }

  // array type
  interface PersonArray {
    [index: number]: Person
  }

  export class TallPerson implements Person {
    static SPECIES: string = "Homo Sapiens";
    private _privateProperty: string;
    // getter requires ES 5 or above
    /*
    get privateProperty(): string {
      return this._privateProperty;
    }
    */
    lastname: string;
    firstname: string;

    notInPerson: boolean;
    children: PersonArray;

    constructor(lastname: string) {
      this.lastname = lastname;
      this._privateProperty = lastname;
    }

    greet() {
      return "hello" + this._privateProperty + " " + TallPerson.SPECIES;
    }
  }

  var p = new TallPerson("John");
  p.firstname = "test";
}