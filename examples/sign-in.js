var reply = require('./../');

var get_input = function(){

	reply.confirm('Would you like to sign in?', function(err, yes){
		reply.get({ username: 'username', password: { type: 'password'} }, function(err, result){
			console.log(result);
			reply.confirm('Ready to login?', function(err, yes){

					if (err || !yes)
						get_input();
					else
						console.log("Gracias.")

			})

		})

	});
	
}

get_input();