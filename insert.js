const Station = require( "./src/models/station");
const Train = require("./src/models/train");
const Meals = require("./src/models/Meals");

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://archit:Mongopass@cluster0.wlsiu.mongodb.net/railgaadi?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(()=>console.log("db connected"));


/*const station = new Station({
       stName:'New Delhi Jn',
       trainName:'Humayun Express',
       trainNo:16,
        origin:'New Delhi',
        destination:'Ahmedabad',
        noOfPlatform:9
    });
    station.save().then(()=>{
         console.log(station)
     }).catch((e)=>{
         console.log(e)
     })
*/

 /*   const train = new Train({
           trName:'shatabadi Express',
           trNo:12,
           start:'Chandigarh',
           end:'New Delhi',
           
           runsOn:[{days:'Tuesday'},{days:'Thursday'},{days:'Saturday'},{days:'Friday'}],
           date : '02-11-2021'
        })
        train.save().then(()=>{
            console.log(train)
         }).catch((e)=>{
           console.log(e)
        })
*/
      /*  const meal = new Meals({
                outlets:'Vinay Hotel',
                time:'8am to 5pm',
                phNo:7993271333
             })
             meal.save().then(()=>{
                 console.log(meal)
            }).catch((e)=>{
               console.log(e)
            })*/