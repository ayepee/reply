var reply = require('./../');

reply.confirm('Do you like pizza?', function(err, yes){
    if(!err && yes) {
        console.log("Good. Everyone should too.");
    }
    else {
        console.log("That sucks.");
    }
});