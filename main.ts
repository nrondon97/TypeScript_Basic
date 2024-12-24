//Explicit String
let fname: string = "Naylene";

//Implicit/Infer String
let lname = "Rondon";

//Any
let test: any = true;
//any = 15;

//Unknwon
let w: unknown = 1;

//Never
//let x: never = true; // Error can't be boolean

//Undefined and Nulls
let y: undefined = undefined;
let z: null = null;

//Arrays
const names: string[] = [];
names.push("Dylan");
names.push(fname);

const moreNames: readonly string[] = ["Naylene"];

//Tuples
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Testing"];