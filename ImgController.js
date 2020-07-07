const knex = require("../database")
const { update } = require("../database")

module.exports = {
    async index(req, res) {
        try {
            const results = await knex('img')

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const {
                name,
                main,
                products_id,
            } = req.body

            await knex('img')
                .insert({
                    name,
                    main,
                    products_id,
                })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const {
                name,
                main,
                products_id,
                created_at,
            } = req.body
            const created_at = knex.fn.now()

            await knex('img')
                .update({
                    name,
                    main,
                    products_id,
                    created_at,
                })
                .where({ id })
            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('img')
                .where({ id })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}