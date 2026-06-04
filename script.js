let orderCount = 0;

    function addToOrders(button) {
      const productCard = button.closest('.product-card');
      const image = productCard.querySelector('img').src;
      const name = productCard.querySelector('p').innerText;
      const price = productCard.querySelector('h2').innerText;

      orderCount++;
      document.getElementById('order-count').innerText = orderCount;
      document.getElementById('empty-message').style.display = 'none';

      const orderColumn = document.createElement('div');
      orderColumn.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';

      orderColumn.innerHTML = `
        <div class="order-card">
          <img src="${image}" alt="Ordered Product">
          <p>${name}</p>
          <h2>${price}</h2>
          <button onclick="removeOrder(this)">Remove</button>
        </div>
      `;

      document.getElementById('orders-container').appendChild(orderColumn);
      document.getElementById('orders').scrollIntoView({ behavior: 'smooth' });
    }

    function removeOrder(button) {
      button.closest('.col-12').remove();
      orderCount--;
      document.getElementById('order-count').innerText = orderCount;

      if (orderCount === 0) {
        document.getElementById('empty-message').style.display = 'block';
      }
    }

    function search(event) {
      event.preventDefault();
      const searchValue = document.getElementById('searchbar').value.toLowerCase().trim();
      const products = document.querySelectorAll('.product-card');
      let found = false;

      products.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.parentElement.style.display = 'block';

        if (searchValue !== '' && !text.includes(searchValue)) {
          card.parentElement.style.display = 'none';
        } else if (searchValue !== '') {
          found = true;
        }
      });

      document.getElementById('product-page').scrollIntoView({ behavior: 'smooth' });

      if (searchValue !== '' && !found) {
        alert('No products found');
        products.forEach(card => card.parentElement.style.display = 'block');
      }
    }
