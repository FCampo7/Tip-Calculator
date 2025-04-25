var percent = 0;

function selectPercent(sender, value) {
	percent = value;

	document.querySelectorAll(".active").forEach(function (item) {
		if (item !== null) item.classList.remove("active");
	});
	sender.classList.add("active");

	document.getElementById("reset").toggleAttribute("disabled", false);
}

function selectCustomPercent(sender) {
	percent = parseFloat(sender.value);
	if (isNaN(percent) || percent < 0) {
		percent = 0;
		sender.value = 0;
	} else if (percent > 100) {
		percent = 100;
		sender.value = 100;
	}

	document.querySelectorAll(".active").forEach(function (item) {
		if (item !== null) item.classList.remove("active");
	});
	sender.classList.add("active");

	document.getElementById("reset").toggleAttribute("disabled", false);
}

function calculate() {
	var bill = document.getElementById("bill").value;
	var persons = document.getElementById("persons").value;

	var totalAmount = document.getElementById("total-amount");
	var tipAmount = document.getElementById("tip-amount");

	if (persons <= 0) {
		document.getElementById("error").toggleAttribute("hidden", false);
		document
			.getElementById("input-container-persons")
			.classList.add("error-p");
		return;
	}

	var tip = (bill * percent) / 100;
	var total = parseFloat(bill) + parseFloat(tip);
	var totalPerPerson = total / persons;
	tipAmount.innerText = (tip / persons).toFixed(2);
	totalAmount.innerText = totalPerPerson.toFixed(2);

	document.getElementById("reset").toggleAttribute("disabled", false);
	document.getElementById("error").toggleAttribute("hidden", true);
	document
		.getElementById("input-container-persons")
		.classList.remove("error-p");
}

function reset() {
	document.getElementById("bill").value = 0;
	document.getElementById("persons").value = 0;
	document.getElementById("customPercent").value = null;
	document.getElementById("total-amount").innerText = "0.00";
	document.getElementById("tip-amount").innerText = "0.00";
	document.querySelectorAll(".active").forEach(function (item) {
		if (item !== null) item.classList.remove("active");
	});

	percent = 0;

	document.getElementById("reset").setAttribute("disabled", true);
	document.getElementById("error").toggleAttribute("hidden", true);
}
