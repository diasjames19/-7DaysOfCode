import { Sequelize, DataTypes } from 'sequelize';

const SequelizeDB = new Sequelize({
    dialect: 'sqlite',
    storage: `./src/database/${process.env.DB_NAME}.db`

});
async function createModels(){
const Mission = SequelizeDB.define('missions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,},
    name: {type: DataTypes.STRING(70),allowNull: false,},
    crew: {type: DataTypes.STRING(100),},
    spacecraft: {type: DataTypes.STRING(50),},
    destination: {type: DataTypes.STRING(50),},
    status: {type: DataTypes.STRING(20),},
    duration: {type: DataTypes.INTEGER,},
    sttus: {type: DataTypes.STRING(20),}
    
});

 const result = await Mission.sync();
    if(result < 1){
        console.log("Tabela missions criada com sucesso!");
    }else{
        console.log("Tabela missions já existe.");
    }

}export default createModels;
/*
missions com colunas: 
id, 
name, 
crew, 
spacecraft, 
destination, 
status, 
duration.

*/