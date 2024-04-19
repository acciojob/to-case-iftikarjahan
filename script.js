function toCase(text) {
  let lc=text.toLowerCase();
	let uc=text.toUpperCase();
	let ans=lc+"-"+uc;
	return ans;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
