const {join} = require('path');

class AppController {
    main(req, res) {
        console.log(req.user);
        res.sendFile('chat.html', {
            root: join(__dirname, '../../public/html')
        })
    }
    settings(req, res) {
        res.sendFile('settings.html', {
            root: join(__dirname, '../../public/html')
        })
    }
}

module.exports = new AppController();
