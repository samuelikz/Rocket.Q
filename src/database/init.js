const Database = require('./config')

const initDatabase = {
    async init(){
        const data = await Database()

        await data.exec(`CREATE TABLE rooms (
                id INTEGER PRIMARY KEY, 
                password TEXT
                )`);
        
        await data.exec(`CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT,
                read INT
            )`);
            
        await data.close()
    }
}

initDatabase.init();
