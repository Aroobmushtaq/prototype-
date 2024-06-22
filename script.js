const student={
   fullName:"Aroob Mushtaq",
   marks:90,
   printMarks:function (){
      console.log("marks=" , this.marks);
   },
};
let arr=["apple","mango","banana"]
const employee={
   tax(){
      console.log("tax is 10%")
   }
}
const karan={
   salary:2000,

}
karan.__proto__=employee;