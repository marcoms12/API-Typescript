import { Router, Request, Response } from 'express';
import { User } from '../Models/User';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello User');
});
router.post('/', (req: Request, res: Response) => {
    const{ name,email,password }=req.body
    const usuario = new User(name,email,password);
    usuario.save();
    res.json(usuario);
})

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});

// Export the express.Router() instance
export const UserController: Router = router;