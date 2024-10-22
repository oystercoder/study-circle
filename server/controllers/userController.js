export const test=(req,res)=>{
    res.json({"message":"hello world"})
}

export const update=(req,res)=>{
    console.log(req.user)

}