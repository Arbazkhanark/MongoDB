import mongoose from "mongoose";

//-1.  Connecting MongoDB to Node
mongoose.connect("mongodb://localhost:27017/school").then(()=>console.log("Database Connected")).catch((err)=>console.log(err));







//-2. Create Schema of DB
const student=new mongoose.Schema({
    name:String,
    marks:Number,
    sports:Boolean,
    gender:String
});








//-3. Create collections/model of DB
const Student=new mongoose.model("Student",student);







// INSERT 
const add=async ()=>{

    //Inserting data using await:-Because await will stop executing after that code Untill it didn't give return
    const insert=await Student.create({
        name:"Vegeta",marks:100,sports:true,gender:"Male"
    },
    {
        name:"Arbaaz",marks:70,sports:true,gender:"Male"
    });



    // Read Operation
    const search=await Student.find();
    console.log(search);
    const conditionalSearch=await Student.find({name:"Arbaaz"});
    console.log(conditionalSearch);
    const conditionalSearch1=await Student.find({marks:{$gt:80}});
    console.log(conditionalSearch1);
    const conditionalSearch2=await Student.find({marks:{$in:[70,100]}});
    console.log(conditionalSearch2);
    

    // Update Operation
    const reChange=await Student.updateMany({name:"Arbaaz"},{naam:{$set:"Khan Bhai"}});
    console.log(await Student.find());
    
}

add();