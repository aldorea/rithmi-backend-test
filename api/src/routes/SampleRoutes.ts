import { Router } from 'express';
import { sampleController } from '../controllers/SampleController';


class SampleRoutes {

  public router: Router = Router();


  constructor() {
    this.config();
  }

  config(): void{
    this.router.get('/registros', sampleController.getSamples);
    this.router.get('/registros/:id', sampleController.getSampleById);
    this.router.get('/registros/anomalias/:anomalia', sampleController.getSamplesWithAnomaly);
    this.router.get('/registros/users/:user', sampleController.getSampleByUser);
    this.router.delete('/registros/:id', sampleController.deleteSample);
    this.router.put('/registros/:id', sampleController.updateSample);
    this.router.post('/registros', sampleController.postSample);
  }

}

const sampleRoutes = new SampleRoutes();
export default sampleRoutes.router;

