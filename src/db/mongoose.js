const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://archit:Mongopass@cluster0.wlsiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
