// UI enhancements and interactivity for Laptop Price Predictor

function resetForm() {
    document.getElementById('predictForm').reset();
}

function fillExample() {
    document.getElementById('ram').value = 8;
    document.getElementById('weight').value = 1.5;
    document.getElementById('company').value = 'dell';
    document.getElementById('typename').value = 'notebook';
    document.getElementById('opsys').value = 'windows';
    document.getElementById('cpuname').value = 'intelcorei5';
    document.getElementById('gpuname').value = 'intel';
    document.getElementById('touchscreen').checked = false;
    document.getElementById('ips').checked = true;
}

// Loading spinner for prediction
const predictForm = document.getElementById('predictForm');
if (predictForm) {
    predictForm.addEventListener('submit', function() {
        document.getElementById('loadingSpinner').style.display = 'block';
    });
}

// Compare mode (dummy, needs backend for real prediction)
function compareLaptops() {
    const result = document.getElementById('compareResult');
    result.innerHTML = '<p>Comparison feature coming soon! (Backend needed)</p>';
}

// History (session-based)
function addToHistory(prediction) {
    let history = JSON.parse(sessionStorage.getItem('history') || '[]');
    history.unshift(prediction);
    sessionStorage.setItem('history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    let history = JSON.parse(sessionStorage.getItem('history') || '[]');
    const list = document.getElementById('historyList');
    if (!list) return;
    list.innerHTML = '';
    history.forEach((item, idx) => {
        const li = document.createElement('li');
        li.textContent = `#${history.length-idx}: LKR${item}`;
        list.appendChild(li);
    });
}
renderHistory();

// Chart for price (dummy, needs backend for real data)
if (typeof Chart !== 'undefined' && document.getElementById('priceChart')) {
    new Chart(document.getElementById('priceChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Predicted'],
            datasets: [{
                label: 'Price (LKR)',
                data: [parseInt(document.querySelector('.result p')?.textContent.replace(/\D/g, '')) || 0],
                backgroundColor: ['#2575fc']
            }]
        },
        options: {responsive: true, plugins: {legend: {display: false}}}
    });
}
