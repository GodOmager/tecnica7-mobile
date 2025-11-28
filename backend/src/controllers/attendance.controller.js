import { prisma } from "../prisma.js";

let SIMULATED_DATE = null;
const getToday = () => SIMULATED_DATE ? new Date(SIMULATED_DATE) : new Date();
const addDays = (d,n) => { const x=new Date(d); x.setDate(x.getDate()+n); return x; };

export const checkToday = async (req,res)=>{
  try{
    const d=getToday().toISOString().split("T")[0];
    const s=await prisma.attendanceSheet.findUnique({where:{fecha:new Date(d)}});
    if(!s) return res.json({exists:false});
    res.json({exists:true,sheetId:s.id});
  }catch(e){res.status(500).json({error:e.message});}
};

export const createToday = async (req,res)=>{
  try{
    const d=getToday().toISOString().split("T")[0];
    const f=new Date(d);
    const ex=await prisma.attendanceSheet.findUnique({where:{fecha:f}});
    if(ex) return res.status(400).json({error:"exists"});
    const sheet=await prisma.attendanceSheet.create({data:{fecha:f}});
    const students=await prisma.student.findMany();
    for(const s of students){
      await prisma.attendanceRecord.create({
        data:{
          idHojaAsistencia:sheet.id,
          idEstudiante:s.id,
          estado:null,
          observations:null
        }
      });
    }
    const records=await prisma.attendanceRecord.findMany({
      where:{idHojaAsistencia:sheet.id},
      include:{student:true}
    });
    res.json({sheet,records});
  }catch(e){res.status(500).json({error:e.message});}
};

export const getSheetByDate = async (req,res)=>{
  try{
    const d=new Date(req.params.date);
    const sheet=await prisma.attendanceSheet.findUnique({where:{fecha:d}});
    if(!sheet) return res.status(404).json({error:"not found"});
    const records=await prisma.attendanceRecord.findMany({
      where:{idHojaAsistencia:sheet.id},
      include:{student:true}
    });
    res.json({sheet,records});
  }catch(e){res.status(500).json({error:e.message});}
};

export const updateRecord = async (req,res)=>{
  try{
    const id=Number(req.params.id);
    const {estado,observations}=req.body;
    const r=await prisma.attendanceRecord.update({where:{id},data:{estado,observations}});
    res.json(r);
  }catch(e){res.status(500).json({error:e.message});}
};

export const updateSheet = async (req,res)=>{
  try{
    const {records}=req.body;
    await Promise.all(records.map(r=>prisma.attendanceRecord.update({
      where:{id:r.id},
      data:{estado:r.estado,observations:r.observations}
    })));
    res.json({success:true});
  }catch(e){res.status(500).json({error:e.message});}
};

export const getHistory = async (req,res)=>{
  try{
    const h=await prisma.attendanceSheet.findMany({orderBy:{fecha:"desc"}});
    res.json(h);
  }catch(e){res.status(500).json({error:e.message});}
};

export const getStudentHistory = async (req,res)=>{
  try{
    const id=Number(req.params.studentId);
    const r=await prisma.attendanceRecord.findMany({
      where:{idEstudiante:id},
      include:{sheet:true}
    });
    res.json(r);
  }catch(e){res.status(500).json({error:e.message});}
};

export const deleteToday = async (req,res)=>{
  try{
    const d=getToday().toISOString().split("T")[0];
    await prisma.attendanceSheet.delete({where:{fecha:new Date(d)}});
    res.json({success:true});
  }catch(e){res.status(500).json({error:e.message});}
};

export const skipDay = async (req,res)=>{
  try{
    const now=getToday().toISOString().split("T")[0];
    const next=addDays(now,1);
    SIMULATED_DATE=next.toISOString().split("T")[0];
    res.json({simulatedDate:SIMULATED_DATE});
  }catch(e){res.status(500).json({error:e.message});}
};

export const getSimulatedDate = async (req,res)=>{
  const d=getToday().toISOString().split("T")[0];
  res.json({simulatedDate:d});
};
