import prisma from "../DB/db.config.js";

//Api for cast create using prisma

export const createCast=async(req, res)=>{
    const {name, description, movie_id}=req.body;
    const cast=await prisma.cast.create({
        data:{
            name:name,
            description:description,
            movieId:movie_id
        }
    })

    return res.json({status:200, data:cast, msg:"Cast created successfully"})
}

//api for get cast

export const fetchCast=async(req, res)=>{
    const getcast=await prisma.cast.findMany({
        include:{
            movie:true
        }
    })

    return res.json({status:200, data:getcast})
}

//update cast api

export const updateCast=async(req, res)=>{
    const id=req.params.id;
    const {name, description, movie_id}=req.body;

    const castupdate=await prisma.cast.update({
        where:{
            id:id
        },
        data:{
            name:name,
            description:description,
            movieId:movie_id
        }
    })

    return res.json({status:200, data:castupdate, msg:"cast updated successfully."})
}

//delete cast api

export const deleteCast=async(req, res)=>{
    const id=req.params.id;
    const castDelete=await prisma.cast.delete({
        where:{
            id:id
        }
    })

    return res.json({status:200, data:castDelete, msg:"Cast deleted successfully."})
}