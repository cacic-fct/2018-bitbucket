module.exports = (application) => {
    application.get('/', async (req, res) => {
        await application.app.controllers.homeController.index(application, req, res);
    });
}