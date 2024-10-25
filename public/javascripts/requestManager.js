class RequestManager {
	static async deleteRequest(route, body) {
    const response = await fetch(route, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    // Оновлення поточного вікна без використання кешу
    window.location.reload(true)
    return data
  }
static handleFileSelect(event, imageSelector) {
	var file = event.target.files[0]
	if (file && file.type.startsWith('image/')) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var imgElement = document.querySelector(imageSelector);
			imgElement.src = e.target.result
		}
		reader.readAsDataURL(file);
	}
}
}