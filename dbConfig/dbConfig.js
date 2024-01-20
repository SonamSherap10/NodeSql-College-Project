module.exports ={
  username:"root",
  host: 'localhost',
  db: "itemList",
  password: "",
  dialect: 'mysql',
  pool:{
      max:5,
      min:0,
      idle:10000,
      acquire:30000,
  }
}