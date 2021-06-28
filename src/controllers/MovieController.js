import express from "express";

const router = express.Router();


router.get("/", async (req, res, next) => {
    /*  #swagger.tags = ['Movie']
        #swagger.path = '/movie'
        #swagger.parameters['Testando'] = {
               in: 'body',
               description: 'Any description...'
        } */
    try { 
        res.send("Get aqui");

        logger.info(`get)`);
    } catch (err) {        
        next(err);
    }
});

router.post("/:id", async (req, res, next) => {
    /*  #swagger.tags = ['Movie']
        #swagger.path = '/movie/:id'
        #swagger.parameters['teste'] = {
                in: 'body',
                description: 'Any description...',
                schema: {
                    $name: 'Jhon Doe',
                    $age: 29,
                    about: ''
                }
        } */
    try { 
        let teste = [1,2,3,4];
        res.send(teste);

        logger.info(`get)}`);
    } catch (err) {        
        next(err);
    }
});


export default router;