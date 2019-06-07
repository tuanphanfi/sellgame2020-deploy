const mongoose=require('mongoose');
const Schema= mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
var AwaitingNews = mongoose.model('awaitingNews', new Schema({
    title: String,  
    content: [{
        id: Number,
        inputtype: String,
        inputvalue: String
    }], 
    tag: String}));
module.exports=AwaitingNews;