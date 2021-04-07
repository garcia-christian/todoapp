const pool = require("./db");

const sql = 'UPDATE public.category SET cat_desc = $1 WHERE cat_id = 1 RETURNING *';
const data = ['HQ'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }

});
pool.end();