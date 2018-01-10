var info = JSON.parse(data);
var list
var title

function init() {
	list = document.getElementById("list")
	title = document.getElementById("title")

	title.innerHTML += info.serverName;

	info.services.forEach(function (element) {
		list.innerHTML += '<li><a href="' + document.location.href + ':' + element.port + '">' + element.name + "</a ></li > ";
	});
}