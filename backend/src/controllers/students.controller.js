import { prisma } from "../prisma.js";

export const getAll = async (req,res)=>{
  try{
    const s=await prisma.student.findMany({orderBy:{apellido:"asc"}});
    res.json(s);
  }catch(e){res.status(500).json({error:e.message});}
};

export const getById = async (req,res)=>{
  try{
    const id=Number(req.params.id);
    const s=await prisma.student.findUnique({where:{id}});
    if(!s) return res.status(404).json({error:"not found"});
    res.json(s);
  }catch(e){res.status(500).json({error:e.message});}
};

export const create = async (req,res)=>{
  try{
    const data=req.body;
    const s=await prisma.student.create({data});
    res.json(s);
  }catch(e){res.status(500).json({error:e.message});}
};

export const update = async (req,res)=>{
  try{
    const id=Number(req.params.id);
    const data=req.body;
    const s=await prisma.student.update({where:{id},data});
    res.json(s);
  }catch(e){res.status(500).json({error:e.message});}
};

export const remove = async (req,res)=>{
  try{
    const id=Number(req.params.id);
    await prisma.student.delete({where:{id}});
    res.json({success:true});
  }catch(e){res.status(500).json({error:e.message});}
};

export const createMany = async (req,res)=>{
  try{
    const list=req.body; 
    const result=[];
    for(const data of list){
      const s=await prisma.student.create({data});
    }
    res.json(result);
  }catch(e){res.status(500).json({error:e.message});}
};