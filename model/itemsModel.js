module.exports=(sequelize,Sequelize)=>{
  const Items = sequelize.define("Items",{
   Name :{
    type : Sequelize.STRING,
   },
   Description:{
    type: Sequelize.STRING,
   allowNull : false 
  }
  })
  return Items
  }