const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://archit:Mongopass@cluster0.wlsiu.mongodb.net/railgaadi?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

{
    "_id": {
        "$oid": "61b05ecbb0543898a4443466"
    },
    
    "trName" : "Majra Express",
    "trNo" : 20,
    "start" : "Ahmedabad",
    "end" : "New Delhi",
    "runsOn" : [ 
        {
            "_id" : ObjectId("61b05e53b0543898a4443463"),
            "days" : "Wednesday"
        }, 
        {
            "_id" : ObjectId("61b05e91b0543898a4443465"),
            "days" : "Monday"
        }, 
        {
            "_id" : ObjectId("61b05e75b0543898a4443464"),
            "days" : "Sunday"
        }
    ]
   

}