export const errorPage = (req, res, next)=>{
    res.status(404).send('The page you are looking for might be in a different planet!');
}