fetch('json/shit_to_do.json')
  .then(response => response.json())
  .then(data => {
    for (const category in data) {
      const box = document.createElement('div');
      box.className = 'category';

      const title = document.createElement('h2');
      title.textContent = category;
      box.appendChild(title);

      const list = document.createElement('ul');
      data[category].forEach(item => {
        if (typeof item === 'string') {
          const li = document.createElement('li');
          li.textContent = item;
          list.appendChild(li);
        } else if (typeof item === 'object') {
          for (const sub in item) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${sub}</strong><ul>` +
              item[sub].map(subitem => `<li>${subitem}</li>`).join('') +
              `</ul>`;
            list.appendChild(li);
          }
        }
      });

      box.appendChild(list);
      document.getElementById('container').appendChild(box);
    }
  })
  .catch(error => {
    document.body.textContent = "Failed to load JSON 😩";
    console.error(error);
  });
