document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const section = card.getAttribute('data-section');
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById(section + 'Page').style.display = 'flex';
  });
});

function goBack() {
  document.querySelectorAll('.interface').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById('mainPage').style.display = 'block';
}