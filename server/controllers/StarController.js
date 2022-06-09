import { galaxyService } from "../services/GalaxyService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";



export class StarController extends BaseController {
    constructor() {
        super('api/stars')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let stars = await starService.getAll()
            return res.send(stars)
        } catch (error) {
            next(error)

        }
    }

    async create(req, res, next) {
        try {
            let star = await starService.create(req.body)
            return res.send(star)
        } catch (error) {
            next(error)

        }
    }
    async remove(req, res, next) {
        try {
            let message = await starService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}