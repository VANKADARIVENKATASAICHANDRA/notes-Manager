//import express
const express= require('express');

// import url
const url =require('url');

//inport cors- cross origin resource sharing
const cors= require('cors');
//create an object for express
var api =express();

//enable cors for this api
api.use(cors());
// import mongodb 
const {MongoClient}=require('mongodb');
//mongo server running 
const mongourl= "mongodb://127.0.0.1:27017"

// create a client object for mongo
const client= new MongoClient(mongourl);
const dbName='Harish';


//default handler 
api.get('/',function(request,response){
    response.send("API  server is online ,you can call api")

})
//handler to read notes ,owner
api.get('/insertnotes', async function(request,response){
    urldata=url.parse(request.url,true);//parsing
    var notes=urldata.query.notes;
    var owner=urldata.query.owner;
    console.log(notes,owner);
    await client.connect();
    console.log("connected with mongodb server");
    const db=client.db(dbName);
    const collection=db.collection('expressnotes');
    const result= await collection.insertOne({'notes':notes,'owner':owner});
    console.log(result);

    response.json({status:'success'});

})
//register new user 
api.get('/newregistration',async function(request,response){
    urldata=url.parse(request.url,true);//parsing
    var name=urldata.query.name;
    var mobile=urldata.query.mobile;
    var password=urldata.query.password;
    var email=urldata.query.email;
    console.log(name,mobile,password,email);
    await client.connect();
    console.log("connected with mongodb server");
    const db=client.db(dbName);
    const collection=db.collection('expressregister');
    const result1=await collection.find().toArray();
    for(let item of result1){
        if(item['mobile']==mobile){
            response.json({status:'failure'});
        }
    }
    const result= await collection.insertOne({'name':name,'mobile':mobile,"password":password,'email':email})
    console.log(result);
    response.json({status:'success'})
    
})
//verify login detains
api.get('/verifylogin',async function(request,response){
    urldata=url.parse(request.url,true);//parsing
    var username=urldata.query.username;
    var password=urldata.query.password;
    
    console.log(username,password);
    await client.connect();
    console.log("connected with mongodb server");
    const db=client.db(dbName);
    const collection=db.collection('expressregister');
    const result= await collection.find().toArray();

    console.log(result);
    var flag=0;
    for(let item of result){
        console.log(item);
        if(item['mobile']==username && item['password']==password){
            console.log('valid details');
            flag=1;
        }
    }
    if(flag==0){
        response.json({status:'failure'});
    }else{
    response.json({status:'success'})
    }
})
//this api is used  to read notes 
api.get('/viewnotes', async function(request,response){
    await client.connect();
    console.log("connected with mongodb server");
    const db=client.db(dbName);
    const collection=db.collection('expressnotes');

    const result =await collection.find({}).toArray();
    console.log(result);
    response.json({status:result});
})
// this api is used to read user specific notes from db
api.get("/viewusernotes",async function(request,response){
    urldata=url.parse(request.url,true);
    var username=urldata.query.username;
    console.log(username);

    await client.connect();
    console.log("connected with mongodb server");
    const db=client.db(dbName);
    const collection=db.collection('expressnotes');

    const result =await collection.find({'owner':username}).toArray();
    console.log(result);
    // response.json(result);
    response.json({status:'success'})
    
})


api.listen(2000,function(){
    console.log("api server is online")
})


