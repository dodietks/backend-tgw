const knex = require("../database")
const { update } = require("../database")

module.exports = {
    async index(req, res) {
        try {
            const results = await knex('orders')

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const {
                quantity,
                note,
                product_id,
                is_payd_out
            } = req.body

            await knex('orders')
                .insert({
                    quantity,
                    note,
                    product_id,
                    is_payd_out
                })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const {
                quantity,
                note,
                product_id,
                is_payd_out
            } = req.body
            const updated_at = knex.fn.now()
            const { id } = req.params

            await knex('orders')
                .update({
                    quantity,
                    note,
                    product_id,
                    is_payd_out
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

            await knex('orders')
                .where({ id })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}