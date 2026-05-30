var items = [];
var current = 0;

function getVisibleItems() {
  return Array.from(document.querySelectorAll('.photo-item:not([style*="display: none"])'));
}

function buildGrid(photos) {
  var grid = document.getElementById('photo-grid');
  grid.innerHTML = '';
  photos.forEach(function(photo) {
    var div = document.createElement('div');
    div.className = 'photo-item';
    div.dataset.cat = photo.category;
    div.dataset.caption = photo.caption;
    div.dataset.full = photo.file;

    var img = document.createElement('img');
    img.src = photo.thumbnail || photo.file;  // thumbnail in grid
    img.alt = photo.alt || photo.caption;
    img.loading = 'lazy';

    var cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = photo.caption;

    div.appendChild(img);
    div.appendChild(cap);
    div.addEventListener('click', function() { openLightbox(div); });
    grid.appendChild(div);
  });
}

function openLightbox(item) {
  items = getVisibleItems();
  current = items.indexOf(item);
  showSlide(current);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showSlide(idx) {
  var item = items[idx];
  var lbImg = document.getElementById('lb-img');
  lbImg.src = item.dataset.full || item.querySelector('img').src;  // full-size in lightbox
  lbImg.alt = item.querySelector('img').alt;
  document.getElementById('lb-caption').textContent = item.dataset.caption || '';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
document.getElementById('lb-prev').addEventListener('click', function(e) {
  e.stopPropagation();
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
});
document.getElementById('lb-next').addEventListener('click', function(e) {
  e.stopPropagation();
  current = (current + 1) % items.length;
  showSlide(current);
});
document.addEventListener('keydown', function(e) {
  var lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') { current = (current + 1) % items.length; showSlide(current); }
  if (e.key === 'ArrowLeft')  { current = (current - 1 + items.length) % items.length; showSlide(current); }
  if (e.key === 'Escape') closeLightbox();
});

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.dataset.filter;
    document.querySelectorAll('.photo-item').forEach(function(item) {
      item.style.display = (filter === 'all' || item.dataset.cat === filter) ? '' : 'none';
    });
  });
});

fetch('photos.json')
  .then(function(r) { return r.json(); })
  .then(function(photos) { buildGrid(photos); })
  .catch(function() {
    document.getElementById('photo-grid').innerHTML =
      '<p style="color:#999;padding:20px">Failed to load photos.</p>';
  });
