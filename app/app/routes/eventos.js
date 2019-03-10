module.exports = (application) => {
	application.get('/eventos', async (req, res) => {
		application.app.controllers.eventoController.index(application, req, res);
	});
}