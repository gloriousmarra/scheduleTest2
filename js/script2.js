fetch('json/dates.json')
  .then(response => response.json())
  .then(dates => {
    const container = document.getElementById('container');

    dates.forEach(date => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('img-box');

      const img = document.createElement('img');
      img.alt = date;
      img.classList.add('gallery-img');

      const caption = document.createElement('p');
      caption.textContent = date;
      caption.classList.add('img-caption');

      const tryJpg = () => {
        img.src = `imgs/${date}.jpg`;
        img.onerror = () => {
          console.warn(`Missing both .png and .jpg for: ${date}`);
          wrapper.remove(); // remove wrapper if neither exists
        };
      };

      img.src = `imgs/${date}.png`;
      img.onerror = tryJpg;

      wrapper.appendChild(img);
      wrapper.appendChild(caption); // add caption under the image
      container.appendChild(wrapper);
    });
  })
  .catch(err => console.error('Failed to load gallery images:', err));
