const Database = require("../database/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const password = req.body.password
        let roomId

        for(var i = 0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }

        await db.run(`INSERT INTO rooms (
            id,
            password) VAlUES (
                ${parseInt(roomId)},
                '${password}'
        );`)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}