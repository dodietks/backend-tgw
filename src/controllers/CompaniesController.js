const knex = require("../database")
const { update } = require("../database")

module.exports = {
    async index(req, res) {
        try {
            const results = await knex('companies')

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const {
                trade_name,
                company_name,
                phone,
                owner_id
            } = req.body

            await knex('companies')
                .insert({
                    trade_name,
                    company_name,
                    phone,
                    owner_id
                })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const {
                trade_name,
                company_name,
                phone,
                owner_id
            } = req.body
            const { id } = req.params

            await knex('companies')
                .update({
                    trade_name,
                    company_name,
                    phone,
                    owner_id
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

            await knex('companies')
                .where({ id })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}