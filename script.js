const ctx = document.getElementById('viewsChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Views',
      data: [12000, 15000, 13500, 17000, 19000, 22000, 25000],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: { responsive: true, scales: { y: { beginAtZero: true } } }
});