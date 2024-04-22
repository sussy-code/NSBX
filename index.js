function openMailClient() {
	var subject = document.getElementById('email-subject-input').value;
	var content = document.getElementById('email-content-input').value;

	if (content !== '' && subject !== '') {
		const mailLink = `mailto:dev@nsbx.ru?subject=${subject}&body=${content}`;
		window.open(mailLink, '_blank');
	}
}

function copyToClipboard() {
	var text = document.querySelector('.api-response pre').innerText;
	var tempInput = document.createElement('textarea');
	tempInput.value = text;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand('copy');
	document.body.removeChild(tempInput);
}

function checkSiteStatus() {
	const time = performance.now();
	fetch('https://api.ipify.org', {
		method: 'GET',
	})
		.then((res) => {
			if (res.status === 200) {
				document.getElementById('statusBox').style.borderColor = '#57F287';
				document.getElementById('statusText').textContent = `Online (${Math.round(performance.now() - time)}ms)`;
			} else {
				document.getElementById('statusBox').style.borderColor = '#ED4245';
				document.getElementById('statusText').textContent = 'Offline :(';
			}
		})
		.catch((error) => {
			console.error('Error checking site status:', error);
			document.getElementById('statusBox').style.borderColor = '#ED4245';
			document.getElementById('statusText').textContent = 'Offline :(';
		});
}

window.onload = checkSiteStatus;
