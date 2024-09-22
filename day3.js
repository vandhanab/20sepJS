// mutable data types
var family =["Nanna","amma","akka","me","bava"]
console.log(family.length);//adding another element
console.log(family.length);
console.log(family);
family[0]="janakirami Reddy"; // mofification
console.log(family);
family[5]="mamayya"; // adding new element
console.log(family);

// number methods
// tostring()
var a=100;
console.log(a);
var a1=a.toString();
console.log(typeof a1);
console.log(typeof a1,a1);

// parseInt()
var a=958.65464;
console.log(parseInt(a));

//pasreFloat
var a=958.666;
console.log(parseFloat(a));
console.log(typeof a);


// is Finite()
var a=958.666;
console.log(isFinite(a));
console.log(typeof isFinite(a));

// toFixed()
var a=111.11;
console.log(a.toFixed(1));
var a=111.11;
console.log(a.toFixed(2));
var a=111.11;
console.log(a.toFixed(10));

// to Precision
vara=111.11;
console.log(a.toPrecision(4));
vara=111.11;
console.log(a.toPrecision(10));




























