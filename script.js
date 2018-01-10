var info = JSON.parse(data);
var list
var title

function init() {
	list = document.getElementById("list")
	title = document.getElementById("title")

	var tmp = ""
	info.forEach(function (server) {
		tmp += "<li><h3>" + server.name + "</h3></li><ul>"

		server.services.forEach(function (service) {
			var proto = "http"
			if (service.secure)
				proto += "s"

			tmp += '<li><a href="' + proto + '://' + server.address + ':' + service.port + '">' + service.name + "</a></li >";
		});
		tmp += "</ul>"

	});
	list.innerHTML = tmp;
}