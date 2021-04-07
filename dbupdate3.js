const pool = require("./db");

const sql = 'UPDATE public.assignment SET todo_id = $1,cat_id = $2 WHERE asgmnt_id = 1 RETURNING *';
const data = [1,3];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }

});
pool.end();