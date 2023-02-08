const authenticate=(req,res,next)=>{
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
next();
    }
    else{
        return res.send('<h1>User is not authenticated</h4>')
    }
}
export {authenticate};