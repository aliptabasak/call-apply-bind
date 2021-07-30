
//call(1)
var obj={num:2};
var addToThis =function(a){
    return this.num+a;
}
console.log(addToThis.call(obj,2));

//apply(2)
const person1={
    fname:"Alipta",
    lname:"Basak"
}
const person={
    fullname:function(){
        return this.fname+" "+this.lname;
    }
}
console.log(person.fullname.apply(person1));

//bind(3)
var obj={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
var arr=[1,2,3];
var bound1=addToThis.bind(obj);
console.log(bound1(1,2,3));

//bind(4)
var student1={
    age:21
};

var student={
    studentAge:function(){
        return this.age;
    }
}
var bound=student.studentAge.bind(student1);
console.log(bound());

//currying
//(i)
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyTwo=multiply.bind(this,2);
multiplyTwo(5);
//(ii)
let multiply1=function (x){
return function(y){
    console.log(x*y);
}
}
let multiplyThree=multiply1(3);
multiplyThree(2);
