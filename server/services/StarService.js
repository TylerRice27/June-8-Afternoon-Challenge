import { dbContext } from "../db/DbContext";






class StarService {


    async getAll(query = {}) {
        const stars = await dbContext.Stars.find(query)
        return stars
    }

    async create(body) {
        const star = await dbContext.Stars.create(body)
        return star
    }

    async remove(id) {
        const original = await dbContext.Stars.findById(id)
        await original.remove()
        return `deleted ${original.name}`
    }




}



export const starService = new StarService()