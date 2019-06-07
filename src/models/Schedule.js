const mongoose=require('mongoose');
const Schema= mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
var Schedule = mongoose.model('schedule', new Schema({time: String,  event: String, location: String, description: String}),"schedule");
module.exports=Schedule;