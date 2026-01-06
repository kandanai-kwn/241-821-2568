// // // // console.log("Hello Word")
 // // console.log("this is a teat javascript flie")


// // // 
// // let fname="john";// string
// // console.log("Name:",fname);
// // const PI=3.14;


// // // number
// // let age=30;//number
// // let height=5.9;//number

// // fname= "Alice"
// // console.log("Name:",fname);


// // fname="Bob"
// // console.log("Name:",fname);
// // console.log("Age:",age)
// // console.log("Height:",height);


// // let number="10";
// // let number2="3";

// // let result1=number+number2;
// // console.log("ผลบวก =",result1);


// // let number1=23;
// // let number2=21;
// // let condition= number1 < number2;
// // console.log("condition:",condition);

// // let number1=3;
// // let number2=5;
// // grade
// // >=80 เป็นเกรด a
// // >=70 เป็นเกรด B


// let score=prompt("ใส่คะแนนของคุณ");
// //if-else
// if(score >= 80){
//     console.log("grade= A");
// }else if(score>=70){
//     console.log("grade = B");
// }
// else if (score>=60){
//     console.log("grade = C");
// }else if (score>=50){
//     console.log("grade =D");

// }else{
//     console.log("grade = F");
// }
// let  number1=5;
// let number2=10;
// let condition1=(number1>0) || (number2>0)
// console.log("condition1:",condition1);

// let age=25;
// let gender= "famale"
// if (age >= 18 && gender == "famale"){
//     console.log("คุณไม่สารถเข้าร่วมได้");
// }

// let number1 = 20
// if (!(number1 % 2 == 0)){
//     console.log("Even")
// }else{
//     console.log("obb")
// }


// let conter =0;
// while (conter <= 4){
//     conter=conter+1;
//     console.log("While: ",conter);
// }
// for (let i=0; i <= 4; i=i+1){
//     console.log("for:",i)
// }


// let age1=25;
// let age2=30;
// let age3=35;
// console.log(age1,age2,age3);

// let ages=[25,30,35];
// console.log(ages)
// console.log(ages[1])


// ages=[40,45,50]
// console.log(ages);

// // ต่อ arry
// ages.push(55);
// console.log(ages)

// // ความยาว arry 
// console.log(ages.length);

// // ลบ arry 
// ages.pop();
// console.log(ages);

// if(ages.includes(45)){
//     console.log("พบ 45 in arry");
// }

// let number=[90,60,80,40,50];
// number.sort();
// console.log(number);

// let names=["John","jane","doe"]
// names.push("smith");
// console.log(names);
// console.log(names.length);

// for (let i=0; i <names.length;i++){
//     console.log(names[i]);
// }


// let student= [{
//     age:20,
//     name: "Emma",
//     grade: 'A'
// },{
//     age:22,
//     name: "Liam",
//     grade:'B'
// }];
// for (let i =0; i <student.length; i++){
//     console.log("Student"+(i+1)+":");
//     console.log("Name"+student[i].name);
//     console.log("age"+student[i].age);
//     console.log("Grage:"+student[i].grade)
// }
// student.push({
//     age:21,
//     name:"olivia",
//     grade:'A'
// });


// function
// function calculate_grade(score){
//     if (score >=90){
//         grade = 'A';
//     }else if (score >=80){
//         grade = 'B';
//     }else if (score >=70){
//         grade ='C';
//     }else if (score>=60){
//         grade ='D'
//     }else {
//         grade = 'F'
//     }
//     return grade;
// }
// // เรียกใช้งาน
// let student_score = 85;
// let student_grade = calculate_grade(student_score);
// console.log("Student grade is: "+student_grade);

// let score=[10,20,30,40,50];
// for (let i=0; i <score.length; i++){
//     console.log(`score at index ${i} is ${score[i]}`);
// }
// score = score.map((s) => {
//     return s*2
// })


// score.forEach((s) => {
//     console.log('new score',s)
// })

// arry + funtion
// let score=[10,20,30,40,50];


// for (let index=0; index < score.length; index++){
//     console.log('score',score[index])
// }
// let newScore = score.filter((s) => {
//     return s >= 30
// })
// console.log('newscore :',newScore)

// newScore.forEach((ns) =>{
//     console.log('new score: ',ns)
// })


// obj + funtion

let students = [
    {
        name: 'aa',
        score:'50',
        grade: 'B'

    },
    {
        name: 'bb',
        score:'60',
        grade: 'B'
    }
]
console.log("student :",students[0])

let student =students.find((s) =>{
    if (s.name == 'bb'){
        return true
    }
})

let doblescore_student = students.map((s) => {
    s.score=s.score*2
    return s
})
console.log('studen: ',student)

console.log(doblescore_student)

let heightScore_student= students.filter((s) =>{
    if (s.score >= 110){
        return true
    }
})

console.log('higthScore_student',heightScore_student)