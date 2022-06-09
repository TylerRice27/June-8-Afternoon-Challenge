import { galaxyService } from "../services/GalaxyService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";



export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let galaxies = await galaxyService.getAll()
            return res.send(galaxies)
        } catch (error) {
            next(error)

        }
    }

    async getStars(req, res, next) {
        try {
            let star = await starService.getAll({ galaxyId: req.params.id })
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let galaxy = await galaxyService.create(req.body)
            return res.send(galaxy)
        } catch (error) {
            next(error)

        }
    }
    async remove(req, res, next) {
        try {
            let message = await galaxyService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}