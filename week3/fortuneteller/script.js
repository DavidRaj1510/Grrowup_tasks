document.addEventListener('DOMContentLoaded', () => {
    const tellFortuneButton = document.getElementById('tellFortuneButton');

    tellFortuneButton.addEventListener('click', () => {
        const numChildren = document.getElementById('numChildren').value;
        const partnerName = document.getElementById('partnerName').value;
        const location = document.getElementById('location').value;
        const jobTitle = document.getElementById('jobTitle').value;

        if (numChildren && partnerName && location && jobTitle) {
            tellFortune(numChildren, partnerName, location, jobTitle);
        } else {
            alert('Please fill in all fields');
        }
    });

    function tellFortune(numChildren, partnerName, location, jobTitle) {
        const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
        document.getElementById('fortune').innerHTML = `<p>${fortune}</p>`;
    }
});
