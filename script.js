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

			var addr = proto + '://' + server.address + ':' + service.port;

			tmp += '<li><a href="' + addr + '">' + service.name + '</a> <a target="_blank" href="' + addr + '">[&#8599;]</a></li >';
		});
		tmp += "</ul>"

	});
	list.innerHTML = tmp;
}