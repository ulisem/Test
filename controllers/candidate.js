
var uniqid = require('uniqid'); 

let candidates = [];

const createCandidate = async(req, res = response) => {

    console.log("aqui");
    const { name, skills } = req.body;
    try {
        if(name == undefined || skills == null ){
            return res.status(400).json({
                ok: false,
                msg: 'La data es incompleta '
            })
        }
        const newCandidate = {
            id: uniqid(),
            name:name,
            skills: skills
        }
        candidates.push(newCandidate);

        res.status(201).json({
            ok: true,
            uid: newCandidate.id,
            name: newCandidate.name,
            skills: newCandidate.skills
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
        
    }
}


const getAllCandidates = async(req,res = response) => {
    try {
        if(candidates.length == 0 ){
            return res.status(400).json({
                ok: false,
                msg: 'no hay data '
            })
        }
        console.log(req.query.skills)
        let bestCandidate;
        if(req.query.skills == undefined){
            res.status(201).json({
                ok: true,
                data: candidates
            })
        }else{
            let skills;
            if(req.query.skills.includes(',')){
                skills = req.query.skills.split(',');
           
            }else{
                skills = [req.query.skills]
            }
            console.log(skills,"skills")
            let have = 0;
            let best = 0
            for(let candidate of candidates){
                for(let skill of skills){
                    
                const found = candidate.skills.find(element => element == skill);
                if(found != undefined){
                    have++;
                }
                }

                if( have >= best){
                    best=have;
                    if(bestCandidate == undefined){
                        bestCandidate = candidate;
                    }
                    if(bestCandidate.skills.length < candidate.skills.length){

                        bestCandidate = candidate;
                    }

                }

                have=0;


            }
            res.status(201).json({
                ok: true,
                data: bestCandidate,
            })

        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
        
    }
}

module.exports = {
    createCandidate,
    getAllCandidates
}