const cds = require("@sap/cds");

module.exports = (srv) => {
 //   srv.on("CREATE","Books",_createBooks);
    srv.on("CREATE","Books",async (req) => {
          
  let liBooks = [];
  let lsBooks = {};
  let createResults = [];
  let res = req._.req.res;
  let { Books } = srv.entities;
  let maxID1 = new Date().getSeconds();
  lsBooks.ID = maxID1 + 1;
  lsBooks.title  = req.data.title;
  lsBooks.stock  = maxID1 + 2;
  liBooks.push(lsBooks);
  try {
    await cds.run(INSERT.into("Books").entries(liBooks));
    responseMessage = " Created successfully ";
    createResults.push(responseMessage);
  } catch (e) {
    responseMessage = " Creation failed";
    createResults.push(responseMessage);
  }
  res.send({ value: createResults });
    });
    
};
async function _createBooks(req) {
    
  let liBooks = [];
  let lsBooks = {};
  let res = req._.req.res;
  let { Books } = srv.entities;
  let maxID = SELECT.from(Books, ['MAX(ID) as count']);
//   const maxID = await cds
//       .transaction(req)
//       .run(
//         SELECT.max
//           .from(Books)
//           .columns(
//             "ID",
//           )
//       );
  lsBooks.ID = maxID + 1;
  lsBooks.title  = req.data.title;
  lsBooks.stock  = req.data.stock;
  liBooks.push(lsBooks);
  try {
    await cds.run(INSERT.into("Books").entries(liBooks));
    responseMessage = " Created successfully ";
    createResults.push(responseMessage);
  } catch (e) {
    responseMessage = " Creation failed";
    createResults.push(responseMessage);
  }
  res.send({ value: createResults });
}