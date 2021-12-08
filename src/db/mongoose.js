const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://archit:Mongopass@cluster0.wlsiu.mongodb.net/railgaadi?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

