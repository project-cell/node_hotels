const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
//person 
router.post('/',async (req,res) =>{
    try{
      const data = req.body
      const newperson =new Person(data);
      const response =await newperson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
  
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
    }
    // newperson.age =data.age;
    // newperson.mobile=data.mobile;
    // newperson.email=data.email;
    // newperson.address=data.address;
    // save the function
    //newperson.save((error,savedperson) => {
  }) 
  router.get('/', async(req,res)=>{
    try{
      const data= await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
  
      console.log(err);
      res.status(500).json({error: 'internal server error'});
    }
  })
  router.get('/:workType',async(req,res)=>{
    try{
      const workType = req.params.workType;
    if (workType == 'chef'|| workType == 'manager' || workType== 'waiter')
  
    {
      const response = await Person.find({work: workType});
      console.log('response fectched');
      res.status(200).json(response);
    
    }else{
      res.status(404).json({error: 'invalid work type'});
    }
  }catch (err){
    console.log(err);
    res.status(500).json({error: 'internal server error'});
  }
  })

  router.put('/:id',async(req,res)=>
{
    try{
        const personid =req.params.id;//extract data from url
        const updatedpersondata= req.body;//updated data from the person
        const response =await Person.findByIdAndUpdate(personid,updatedpersondata,{
            new: true,
            runvalidators: true,

        })

        if (!updatedpersondata)
        {
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);


    }catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'internal server error'});


    }
})
router.delete('/:id',async(req,res)=>
{
    try{
        const personid =req.params.id;
        const response =await Person.findByIdAndDelete(personid);
        if (!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log("data deleted");
            res.status(200).json({message: '{personid deleted successfully'});

    }catch(err){
         console.log(err);
        res.status(500).json({error: 'internal server error'});

    }
})

  module.exports=router;