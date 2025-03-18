const mongoose  = require('mongoose');


const commentSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username is required']
    },
    message:{
        type:String,
        required:[true, 'message is required']
    },
   commentedAt:{
        type:Date,
        default:Date.now
    } 
});


const blogPostSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'title is required'],
        unique:true,
        minlength:[5,'title must be atleast 5 characters long' ],
    },
    content:{
        type:String,
        required:[true, 'content is required'],
        minlength:[50,'content must be atleast 10 characters long' ],
    },
    author:{
        type:String,
        required:[true, 'author is required']
    },
    tags:{
        type:[String],
        default:null,
    },
    category:{
        type:String,
        default:'General'
    },
    likes:{
        type:String,
        default:[]
    },
    comments:[commentSchema],
},
timestamp = {createdAt: 'createdAt', updatedAt: 'updatedAt'}

);
module.exports=mongoose.model('BlogPost', blogPostSchema);