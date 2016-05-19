var path=require('path');

module.exports=function(app){
	app.get('/home',function(req,res){
		res.sendFile(path.join(__dirname+'/../public/index.html'))
	});
	app.get('/deeds',function(req,res){
		res.sendFile(path.join(__dirname+'/../public/deeds.html'))
	});
	app.get('/deeds.html',function(req,res){
		res.sendFile(path.join(__dirname+'/../public/deeds.html'))
	});
	app.get('/profile',function(req,res){
		res.sendFile(path.join(__dirname+ '/../public/profile.html'))
	})
	app.get('/profile.html',function(req,res){
		res.sendFile(path.join(__dirname+ '/../public/profile.html'))
	})
	app.get('/leaderboards',function(req,res){
		res.sendFile(path.join(__dirname+ '/../public/leader.html'))
	})
	app.get('/leader.html',function(req,res){
		res.sendFile(path.join(__dirname+ '/../public/leader.html'))
	})
	app.use(function(req,res){
		res.sendFile(path.join(__dirname+'/../public/index.html'))
	});
	
}