function showPage() {
  const target = location.hash.slice(1);
  const pages = Array.from(document.querySelectorAll('.page'));
  const current = pages.find(page => page.id === target) || document.getElementById('overview');
  for (const page of pages) page.hidden = page !== current;
  for (const link of document.querySelectorAll('.tabs a')) {
    if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if (target === 'compare') document.getElementById('compare').scrollIntoView();
  else window.scrollTo({ top: 0, behavior: 'instant' });
}
window.addEventListener('hashchange', showPage);
showPage();
