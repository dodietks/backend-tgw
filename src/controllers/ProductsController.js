const knex = require("../database")
const { update } = require("../database")

module.exports = {
    async index(req, res) {
        try {
            const results = await knex('products')

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const {
                name,
                description,
                price,
                is_active,
                owner_id,
                category
            } = req.body

            await knex('products')
                .insert({
                    name,
                    description,
                    price,
                    is_active,
                    owner_id,
                    category
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
                description,
                price,
                is_active,
                owner_id,
                category
            } = req.body
            const updated_at = knex.fn.now()
            const { id } = req.params

            await knex('products')
                .update({
                    name,
                    description,
                    price,
                    is_active,
                    owner_id,
                    category,
                    updated_at
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

            await knex('products')
                .where({ id })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}