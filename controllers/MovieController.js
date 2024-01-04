import prisma from "../DB/db.config.js";

//Movie create api
export const store=async(req, res)=>{
    const {name}=req.body;
    const movie=await prisma.movie.create({
        data:{
            name
        }
    })

    return res.json({status:200, data:movie, msg:"Movie Added Successfully."})
}

//movie fetch api

export const fetchMovies=async(req, res)=>{
    const page=req.query.page || 1
    const limit=req.query.limit || 1

    if(page <= 0){
        page=1
    }
    if(limit <=0 || limit>100){
        limit=1
    }
    //count skip
    const skip=(page -1) * limit;

    const movies=await prisma.movie.findMany({
        take:limit,
        skip:skip,
        // select:{
        //     name:true
        // }

        include:{
            Cast:{
                select:{
                    name:true,
                    description:true
                }
            }
        }
    })

    const totalMovies=await prisma.movie.count()
    const totalPages=Math.ceil(totalMovies/limit)

    return res.json({status:200, data:movies, metadata:{
        totalPages, 
        currentPage:page,
        currentLimit:limit
    }})
}

//update movie api

export const updateMovie=async(req, res)=>{
    const id=req.params.id;
    const {name}=req.body;

    const updatedmovie=await prisma.movie.update({
        where:{
            id:id
        },
        data:{
            name
        }
    })

  return res.json({status:200, data:updatedmovie, msg:"Movie updated Successfully."})

}

//Delete movie api
export const deleteMovie=async(req, res)=>{
    const id=req.params.id;

    const moviefordelete=await prisma.movie.delete({
        where:{
            id:id
        }
    })

    return res.json({status:200, data:moviefordelete, msg:"Movie deleted successfully."})
}

//search movie api
export const searchMovie=async(req, res)=>{
    const query=req.query.q
    const movies=await prisma.movie.findMany({
        where:{
            name:{
                contains:query,
                mode:"insensitive"
            }
        }
    })
    return res.json({status:200, data:movies})
}

