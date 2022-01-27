const {join} = require('path');

class HomeController {
    login(req, res) {
        res.sendFile('login.html', {
            root: join(__dirname, '../../public/html')
        })
    }

    register(req, res) {
        res.sendFile('register.html', {
            root: join(__dirname, '../../public/html')
        })
    }

    notFound(req, res) {
        res.sendFile('404.html', {
            root: join(__dirname, '../../public/html')
        })
    }

}

module.exports = new HomeController();
