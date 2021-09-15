const express= require('express');
const path =require('path');
const app =epress();
const students =require('./student');
const studentFiltre = require('./studentFiltre');
const student=[
{
id:1,
name:"bilel"
age:18,
},
{
    id:2,
    name:"imenl"
    age:9,
    },
    {
        id:3,
        name:"zahra"
        age:20,
        },
        {
            id:4,
            name:"leilal"
            age:25,
            },
];
app.use(express.static(path.join(__dirname,"public")));
app.use(studentFiltre)
//Get all student
app .get("/student",(req,res)=>{
res.json(students);
})


//Get only 1 student
app.get("/student/:id",(req,res)=>{
let a= students.filter((el)=>{
    el.id===parseInt(req.params.id);
})
if (a.length===0){
res.json({Message:"student not found"+req.params.id})
}
else{
res.json(a)

}
});
app.use(date=(req,res,next)=>{
var objetdate = new Date();
var hours = objetdate.getHours();
var day = objetdate.getDay();
if((hours > = 17 && hours < = 9)&&(day==0 || day ==6)){
res.send("we are closed")
}
next();

})
const port=5000;
app:listen(5000,(err)=>err?console.log("error"):console.log('server is on line on port ${port}'))