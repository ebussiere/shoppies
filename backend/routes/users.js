//const bcrypt = require('bcryptjs');

module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllUsers(db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
   });

  router.post("/", (req, res) => {
    const user = req.body;
    helper.registerUser(db, user)
    .then(res.status(200))
    .catch(e => res.send(e));
  });

  router.get("/", (req, res) => {
    const { email, password } = req.body;
    const user = helper.getUserByEmail(email, db)
    .then(user => {
    console.log(user)
    res.json({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          });
      })
        .catch(e => {
          res.status(500);
        
      });
  });
  return router;
};