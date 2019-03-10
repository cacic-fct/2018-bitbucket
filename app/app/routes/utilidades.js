module.exports = (application) =>{
	application.get('/utilidades', async(req, res) =>{
		await application.app.controllers.utilController.index(application, req, res);
	});
}