const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.send("hi hit the challenge route for the assessment.")
})


app.post("/challenge", (req, res) => {
    // console.log(req.body)

    let arri = []
    let chars = []
    let nums = []
    let charscount = 0
    let numscount = 0
        
    
    const arr = req.body.data;
    for(var i=0; i<arr.length; i++){
        if(!isNaN(arr[i])){
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



app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port 5000.`);
  });
  