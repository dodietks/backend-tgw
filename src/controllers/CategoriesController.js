const knex = require("../database")
const { update } = require("../database")

module.exports = {
    async index(req, res) {
        try {
            const results = await knex('categories')

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const { type } = req.body

            await knex('categories')
                .insert({ type })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { type } = req.body
            const { id } = req.params
            const updated_at = knex.fn.now()

            await knex('categories')
                .update({ type, updated_at })
                .where({ id })
            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('categories')
                .where({ id })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}