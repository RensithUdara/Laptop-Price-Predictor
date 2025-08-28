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

// Dark mode toggle
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn && darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    showToast(document.body.classList.contains('dark-mode') ? 'Dark mode enabled' : 'Light mode enabled');
});

// Download as PDF/CSV
function downloadPrediction() {
    const price = document.getElementById('priceValue')?.textContent || '';
    const data = `Laptop Price Prediction\n${price}`;
    const blob = new Blob([data], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'prediction.txt';
    a.click();
    showToast('Prediction downloaded!');
}

// Share prediction
function sharePrediction() {
    const price = document.getElementById('priceValue')?.textContent || '';
    if (navigator.share) {
        navigator.share({title: 'Laptop Price Prediction', text: price, url: window.location.href});
        showToast('Prediction shared!');
    } else {
        navigator.clipboard.writeText(price + ' ' + window.location.href);
        showToast('Prediction copied to clipboard!');
    }
}

// Feedback/rating
function submitFeedback() {
    const rating = document.getElementById('rating').value;
    if (rating) showToast('Thanks for your feedback!');
}

// FAQ modal
function openFAQ() {
    document.getElementById('faqModal').style.display = 'block';
}
function closeFAQ() {
    document.getElementById('faqModal').style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == document.getElementById('faqModal')) closeFAQ();
}

// Toast notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.className = 'toast show';
    setTimeout(() => { toast.className = 'toast'; }, 2500);
}

// Currency converter (dummy rates)
const rates = {LKR: 1, USD: 0.003, EUR: 0.0027, INR: 0.25};
function convertCurrency() {
    const priceEl = document.getElementById('priceValue');
    if (!priceEl) return;
    const lkr = parseFloat(priceEl.textContent.replace(/\D/g, ''));
    const cur = document.getElementById('currency').value;
    if (rates[cur]) priceEl.textContent = cur + (lkr * rates[cur]).toLocaleString(undefined, {maximumFractionDigits: 2});
}

// Progress bar animation
function animateProgressBar() {
    const bar = document.getElementById('progressBar');
    if (!bar) return;
    bar.style.width = '0%';
    bar.style.display = 'block';
    setTimeout(() => { bar.style.width = '100%'; }, 100);
    setTimeout(() => { bar.style.display = 'none'; }, 1200);
}

// Feature importance (dummy)
function showFeatureImportance() {
    const fi = document.getElementById('featureImportance');
    if (!fi) return;
    fi.innerHTML = '<h4>Feature Importance</h4><ul><li>Ram: 40%</li><li>CPU: 25%</li><li>GPU: 15%</li><li>Company: 10%</li><li>Others: 10%</li></ul>';
}

// Loading spinner for prediction
const predictForm = document.getElementById('predictForm');
if (predictForm) {
    predictForm.addEventListener('submit', function() {
        document.getElementById('loadingSpinner').style.display = 'block';
        animateProgressBar();
        setTimeout(() => {
            document.getElementById('loadingSpinner').style.display = 'none';
            showFeatureImportance();
        }, 1200);
    });
}

// Compare mode (dummy, needs backend for real prediction)
function compareLaptops() {
    const result = document.getElementById('compareResult');
    result.innerHTML = '<p>Comparison feature coming soon! (Backend needed)</p>';
    showToast('Compare feature is a UI demo.');
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
