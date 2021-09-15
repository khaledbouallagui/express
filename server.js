const express= require('express');
const path =require('path');
const app = express();
const student=[
    {
    id:1,
    name:"bilel",
    age:18,
    },
    {
        id:2,
        name:"imenl",
        age:9,
        },
        {
            id:3,
            name:"zahra",
            age:20,
            },
            {
                id:4,
                name:"leilal",
                age:25,
                },
    ];

// const students =require('./Student');
const studentFiltre = require('./studentFiltre');
app.use(date=(req,res,next)=>{
var objetdate = new Date();
var hours = objetdate.getHours();
var day = objetdate.getDay();
if((hours <=17 && hours >= 9)&&(day>1 || day <7)){
return next();
}
res.send("we are closed")

})
app.use(express.static(path.join(__dirname,"public")));
app.use(studentFiltre)
//Get all student
app .get("/student",(req,res)=>{
res.json(student);
})


//Get only 1 student
app.get("/student/:id",(req,res)=>{
    res.json( student.filter((el)=>{
    return  el.id===parseInt(req.params.id);

    }))});

const port=5000;
app.listen(5000,(err)=>err?console.log("error"):console.log(`server is on line on port ${port}`))