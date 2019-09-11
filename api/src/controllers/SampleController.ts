
import SampleModel, {Sample} from '../models/sample'
import { Request, Response } from 'express';


class SampleController {

/**
 * GET todas las muestras
 */
 public async getSamples(req: Request, res: Response) { 
    try {
        const samples: Array<Sample> = await SampleModel.find({})
        if (!samples) return res.status(404).json('No hay registros disponibles');
        return res.status(200).json(samples);
    } catch (err) { 
        return res.status(500).json('Error ' + err);
    }
}

/**
 * GET muestra por id
 */
 public async getSampleById(req: Request, res: Response) {
     const  id  = req.params.id

     try {
        if (id == null) return res.status(404).json('El id de la muestra es nulo');
        const sample: Sample = await SampleModel.findById(id);
        if(!sample) return res.status(404).json('No hay ninguna muestra con ese identificador');
        return res.status(200).json(sample);
     } catch (err) { 
        return res.status(500).json('Error ' + err);
    }
 }

 /**
  * GET Una muestra con anomalias
  */
 public async getSamplesWithAnomaly(req: Request, res: Response) { 
     const anomalia  = req.params.anomalia;
    try {
        const samplesWithAnomaly = await SampleModel.find({ anomaly: anomalia })
        if (!samplesWithAnomaly) return res.status(404).json('No hay registros disponibles');
        return res.status(200).json(samplesWithAnomaly);
    } catch (err) { 
        return res.status(500).json('Error' + err);
    }
}

/**
 * GET muestra por usuario
 */
 public async getSampleByUser(req: Request, res: Response) {
    const user  = req.params.user
    try {
       if (user == null) return res.status(404).json('El usuario es nulo');
       const sample = await SampleModel.find({ user: user });
       if(!sample) return res.status(404).json('No hay pruebas asociadas a ese usuario');
       return res.status(200).json(sample);
    } catch (err) { 
       return res.status(500).json('Error ' + err);
   }
}


/**
 * DELETE una muestra
 */
 public async deleteSample(req: Request, res: Response) {
    const id = req.params.id;
    try {
        if( id == null ) return res.status(404).json('El identificador es nulo');
        const sampleToDelete: Sample = await SampleModel.findByIdAndDelete(id);
        if( !sampleToDelete ) return res.status(404).json('No se encuentra la muestra con ese identificador');
        return res.status(200).json(sampleToDelete);
    } catch (err) {
        return res.status(500).json('Error ' + err);
    }
}


/**
 * PUT una muestra
 */
 public async updateSample(req: Request, res: Response) {
    const id = req.params.id;
    const updateData = req.body;
    try {
        if( id == null ) return res.status(404).json('El identificador es nulo');
        const sampleToUpdate: Sample = await SampleModel.findByIdAndUpdate(id, updateData, { new: true });
        if( !sampleToUpdate ) return res.status(404).json('No se encuentra la muestra con ese identificador');
        return res.status(200).json(sampleToUpdate);
    } catch (err) {
        return res.status(500).json('Error ' + err);
    }
}

/**
 * POST una muestra
 */
 public async postSample(req: Request, res: Response) {
     try {
        const createSample: Sample = new SampleModel({
            date: req.body.date,
            heartSatus: req.body.heartStatus,
            pulse: req.body.pulse,
            hasECG: req.body.hasECG,
            anomaly: req.body.anomaly,
            user: req.body.user
         });
         console.log(createSample)
         await createSample.save();
         return res.status(200).json(createSample);
     } catch (err) {
         res.status(500).json('Error ' + err);
     }
 }

}

export const  sampleController = new SampleController();