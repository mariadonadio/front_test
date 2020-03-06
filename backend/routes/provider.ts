import { Router, Request, Response } from 'express';
import provider from '../models/provider.model';

const router = Router();


router.get('/cuit', (req: Request, res: Response) => {
    
    provider.find({})
        .select('cuit')
        .exec((err1,uDB) => {
            if(err1)
            return res.status(500).json({
                success: false,
                message:`Error al realizar la peticion`,
                error:err1
                })
            if(!uDB)
            return res.status(404).json({
                success: false,
                message:`No providers to show`
                
                })
            res.status(200).json({
                success: true,
                quantity:uDB.length,
                providers:uDB
            })
        })
});

router.get('/:id', (req: Request, res: Response) => {
  
    const id = req.params.id;
   
    provider.findById(id)
        .exec((err1, uDB) => {
            if (err1) {
                return res.status(500).json({
                    success: false,
                    err: err1
                });
            }

            if (uDB) {
                return res.status(200).json({
                    success: true,
                    provider: uDB
                });
            } else {
                return res.status(200).json({
                    success: false,
                    provider: null
                });
            }

        });

});


router.get('/', (req: Request, res: Response) => {
    provider.find({},(err1,uDB) => {
        if(err1)
         return res.status(500).json({
            success: false,
            message:`Error al realizar la peticion`,
            error:err1
            })
        if(!uDB)
         return res.status(404).json({
            success: false,
            message:`No providers to show`
            
            })
        res.status(200).json({
            success: true,
            quantity:uDB.length,
            providers:uDB
         })
             })
});


router.post('/', function (req, res) {
    
    let body = req.body;

    let newProvider = new provider({
        name:body.name,
        cuit:body.cuit,
        email:body.email,
        address:body.address,
        phone:body.phone,
        ri:body.ri
    });

    newProvider.save((err1, uDB) => {
        
        if (err1) {
            return res.status(500).json({
                success: false,
                error:err1
            });
        }

     return res.status(201).json({ 
            success: true,
            provider: uDB
        });
    });

});

router.put('/:id',function(req, res) {
   let id = req.params.id;
   let update = req.body;

    provider.findByIdAndUpdate(id, update, { new: true, runValidators: true }, 
    (err1, uDB) => {

        if (err1) {
            return res.status(500).json({
                success: false,
                err1
            });
        }

        res.json({
            success: true,
            provider: uDB
        });

    })
});


router.delete('/:id', (req, res) => {

    let id = req.params.id;
 
    provider.findById(id, (err, obj) => {

        if (err) {
            return res.status(500).json({
                success: false,
                err
            });
        };

        if (!obj) {
            return res.status(400).json({
                success: false,
                err: {
                    message: 'Provider not found'
                }
            });
        };
        obj.remove (err => {
            if(err) {
                return res.status(500).send({
                    success: false,
                    message:`Error al borrar Proveedor:`
                })
            }
            return res.status(200).send({
                success: true,
                message:'Proveedor fue eliminado'
            })
        });

    })

});




export default router;

