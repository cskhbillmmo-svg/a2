const destinationUrl = 'https://billmmo.com';

document.querySelectorAll('.to-offer').forEach((link) => {
  link.href = destinationUrl;
});

document.querySelectorAll('.stat-num').forEach((el) => {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  if (!isNaN(target)) {
    el.textContent = target.toLocaleString('vi-VN') + suffix;
  }
});

const topnavBurger = document.getElementById('topnavBurger');
const topnavLinks = document.getElementById('topnavLinks');

topnavBurger?.addEventListener('click', () => {
  topnavLinks?.classList.toggle('open');
});

topnavLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    topnavLinks.classList.remove('open');
  });
});

document.querySelectorAll('.bank-pill').forEach((pill) => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.bank-pill').forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

const bankSearch = document.getElementById('bankSearch');
const bankCards = document.querySelectorAll('.bank-card');
bankSearch?.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  bankCards.forEach((card) => {
    const name = card.querySelector('.bank-name')?.textContent.toLowerCase() || '';
    card.classList.toggle('hidden', q && !name.includes(q));
  });
});

const bankSection = document.getElementById('khoi-4');
bankSection?.addEventListener('click', (e) => {
  if (e.target.closest('.bank-search')) return;
  if (e.target.closest('.bank-pill')) return;
  if (!e.target.closest('.bank-card') && !e.target.closest('.section-cta')) return;
  e.preventDefault();
  window.open(destinationUrl, '_blank', 'noopener');
});

bankSection?.querySelectorAll('.bank-card').forEach((el) => {
  el.style.cursor = 'pointer';
});
