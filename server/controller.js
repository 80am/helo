module.exports = {
    register: (req, res) => {
        console.log("register controller")
        let { userName, passWord } = req.body
        const db = req.app.get('db')
        db.creat_user({ passWord, userName })
            .then(newUser => {
                res.status(200).send(newUser)
            })
            .catch(err => {
                res.status(500).send(err)
            })
        res.redirect('/#/Dashboard')
    }
}