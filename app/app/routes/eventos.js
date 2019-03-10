module.exports = (application) => {
	application.get('/eventos', async (req, res) => {
		application.app.controllers.eventoController(application, req, res);
	});
}