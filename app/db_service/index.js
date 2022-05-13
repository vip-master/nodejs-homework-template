const ObjectID= require("mongoose").ObjectId
const Model = require("./schemas")


const listContacts=()=>Model.find()

const getById=(id)=>Model.find({_id: id})

const addContact=(contact)=>Model.create(contact)

const removeContact=(id)=>Model.remove(id)

const updateContact=(id,body)=>Model.findByIdAndUp(id, body) 

const updateStatusContact=(id,body)=>updateContact(id,body)


module.exports={
	listContacts,
	getById,
	addContact,
	removeContact,
	updateContact,
	updateStatusContact
}