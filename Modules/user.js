const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    agent:{
        type:String,
        default:''
    },
    userType:{
        type:String,
        default:''
    },
    policy_mode:{
        type:String,
        default:''
    },
    producer:{
        type:String,
        default:''
    },
    policy_number:{
        type:String,
        default:''
    },
    premium_amount_written:{
        type:String,
        default:''
    },
    premium_amount:{
        type:String,
        default:''
    },
    policy_type:{
        type:String,
        default:''
    },
    company_name:{
        type:String,
        default:''
    },
    category_name:{
        type:String,
        default:''
    },
    policy_start_date:{
        type:String,
        default:''
    },
    policy_end_date:{
        type:String,
        default:''
    },
    csr:{
        type:String,
        default:''
    },
    account_name:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    gender:{
        type:String,
        default:''
    },
    firstname:{
        type:String,
        default:''
    },
    city:{
        type:String,
        default:''
    },
    account_type:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },
    state:{
        type:String,
        default:''
    },
    zip:{
        type:String,
        default:''
    },
    dob:{
        type:String,
        default:''
    },
    primary:{
        type:String,
        default:''
    },
    //
    applicant_id:{
        type:String,
        default:''
    },
    agency_id:{
        type:String,
        default:''
    },
    //
    hasActiveClientPolicy:{
        type:String,
        default:''
    }
},{timestamps:true});

userSchema.index({createdAt:-1});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;
