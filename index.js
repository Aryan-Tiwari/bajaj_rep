const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

app.get("/", (req, res)=>{
    res.send("hi")
})

arr = []
chars = []
nums = []
charscount = 0
numscount = 0

app.post("/challenge", (req, res) => {
    // console.log(req.body)
    const arr = req.body.data;
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            nums.push(arr[i])
            numscount++
            
        }
        if((/[a-zA-Z]/).test(arr[i])){
            chars.push(arr[i])
            charscount++
        }
    }
    if(res.statusCode === 200){
        is_success = true
    }

    count = numscount+charscount
    
    res.json({
        // "status": `${res.statusCode}`,
        "is_success": `${is_success}`,
        "user_id": "aryan tiwari_21062001",
        "count": `${count}`,
        "email": "aryan.tiwari.btech2019@sitpune.edu.in",
        "roll_number": "19070122034",
        "numbers": nums,
        "alphabets": chars
        

    })
});