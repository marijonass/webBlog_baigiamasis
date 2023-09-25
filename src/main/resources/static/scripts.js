function setLanguage(lang) {
	let language = "lang=" + lang;
	let path = window.location.origin + window.location.pathname;
	let search = window.location.search;
	let newUrl;

	// Case: No existing request attributes
	if (!search.length)
		newUrl = path + "?" + language;
	// Case: "lang" attribute already exists
	else if (search.includes("lang="))
		newUrl = path + search.replace(/lang=[a-zA-Z]*/, language);
	// Case: Other request attributes present but no "lang" attribute
	else
		newUrl = path + search + "&" + language;

	console.log("Selected Language: " + lang);
	console.log("Constructed URL: " + newUrl);

	// Open the new URL in the same window
	window.location.href = newUrl;
}
