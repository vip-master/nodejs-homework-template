const router=require("express").Router()
const db=require("../db_service")

router.get("/",async (req,res,next)=>{
	try{
		const result=await db.listContacts()
		res.json({result,number: result.length})
	}
	catch(e){
		next(e)
	}
})

router.get("/:id",async (req,res,next)=>{
	try{
		const result=await db.getById(req.params.id)
		res.json(result)
 	
	}
	catch(e){
		next(e)
	}
})

router.post("/",async (req,res,next)=>{
	try{
		const {body}=req
		const result=await db.addContact(body)
		res.json({body,result})

	}
	catch(e){
		console.error(e)
		next(e)
	}
})

router.delete("/:id",async (req,res,next)=>{
	try{
		const result=await db.removeContact(req.params.id)
		res.json(result)

	}
	catch(e){ 
		next(e)
	}
})

router.put("/:id",async (req,res,next)=>{
	try{
		const result=await db.updateContact(req.params.id,req.body)
		res.json(result)

	}
	catch(e){
		next(e)
	}
})

router.patch("/:id/favorite",async (req,res,next)=>{
	try{
		const result=await db.updateStatusContact(req.params.id,req.body)
		res.json(result)

	}
	catch(e){
		next(e)
	}
})

module.exports=router