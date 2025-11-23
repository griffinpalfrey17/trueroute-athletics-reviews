// transfer-data.loader.js — fetches stats and fills the DOM
(async function(){
  const badgeId = 'sampleDataBadge';
  try{
    const res = await fetch('./data/transfer.json', { cache: 'no-store' });
    const data = await res.json();

    const el = (id) => document.getElementById(id);
    if (el('currentActive')) el('currentActive').textContent = Number(data.currentActive).toLocaleString();

    // fill By Sport
    const sportCard = document.querySelector('.data-card:nth-of-type(2)');
    if (sportCard) {
      const rows = sportCard.querySelectorAll('.data-stat .stat-value');
      const labels = sportCard.querySelectorAll('.data-stat .stat-label');
      data.bySport.forEach((row, i) => {
        if (labels[i]) labels[i].textContent = row[0];
        if (rows[i]) rows[i].textContent = Number(row[1]).toLocaleString();
      });
    }

    // fill Success Rates
    const successCard = document.querySelector('.data-card:nth-of-type(3)');
    if (successCard) {
      const rows = successCard.querySelectorAll('.data-stat .stat-value');
      const labels = successCard.querySelectorAll('.data-stat .stat-label');
      data.successRates.forEach((row, i) => {
        if (labels[i]) labels[i].textContent = row[0];
        if (rows[i]) rows[i].textContent = row[1];
      });
    }

    // fill Trends
    const trendNumbers = document.querySelectorAll('.trend-number');
    const trendLabels = document.querySelectorAll('.trend-label');
    data.trends.forEach((row, i) => {
      if (trendLabels[i]) trendLabels[i].textContent = row[0];
      if (trendNumbers[i]) trendNumbers[i].textContent = row[1];
    });

    // Add small "Sample Data" badge
    const container = document.querySelector('.transfer-header h1');
    if (container && !document.getElementById(badgeId)) {
      const badge = document.createElement('span');
      badge.id = badgeId;
      badge.textContent = 'Sample Data';
      badge.style.cssText = 'margin-left:10px; font-size:12px; background:#e5e7eb; color:#111827; padding:2px 6px; border-radius:9999px;';
      container.after(badge);
    }
  } catch(e){
    console.warn('Failed to load transfer data:', e);
  }
})();