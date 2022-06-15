const mongoose = require('mongoose');

mongoose
    //.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.b21ub.mongodb.net/AJT_DB",
    .connect("mongodb+srv://ajtDB:ajtDBmdp@cluster0.b21ub.mongodb.net/AJT_DB",
    //.connect("mongodb+srv://ajtmaison:ajtDBmdp@cluster0.ujqlu.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUndifiedTopology: true,
        useCreateIndex: true,
        useFindModify: false
    })

    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.log("failed to connect to mongoDB", err));