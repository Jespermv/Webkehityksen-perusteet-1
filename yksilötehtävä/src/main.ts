// Define types for the API response
interface Restaurant {
  id: number;
  name: string;
  address: string;
  city: string;
}

interface Menu {
  day: string;
  meals: string[];
}

const apiUrl = 'https://media1.edu.metropolia.fi/restaurant';

async function fetchRestaurants(): Promise<Restaurant[]> {
  try {
    const response = await fetch(`${apiUrl}/restaurants`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
}

async function fetchMenu(restaurantId: number, period: 'day' | 'week'): Promise<Menu[]> {
  try {
    const response = await fetch(`${apiUrl}/menu/${restaurantId}/${period}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${period} menu:`, error);
    return [];
  }
}

async function displayRestaurants() {
  const restaurantList = document.getElementById('restaurant-list');
  if (!restaurantList) return;

  const restaurants = await fetchRestaurants();
  restaurantList.innerHTML = '';

  restaurants.forEach(restaurant => {
    const restaurantItem = document.createElement('div');
    restaurantItem.className = 'restaurant';
    restaurantItem.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>${restaurant.address}, ${restaurant.city}</p>
      <button class="menu-btn" data-id="${restaurant.id}">View Menus</button>
    `;
    restaurantList.appendChild(restaurantItem);
  });

  document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      const restaurantId = target.dataset.id ? parseInt(target.dataset.id) : 0;
      if (restaurantId) {
        showMenuOptions(restaurantId);
      }
    });
  });
}

function showMenuOptions(restaurantId: number) {
  const dailyBtn = document.getElementById('show-daily-menu');
  const weeklyBtn = document.getElementById('show-weekly-menu');
  if (!dailyBtn || !weeklyBtn) return;

  dailyBtn.onclick = () => displayMenu(restaurantId, 'day');
  weeklyBtn.onclick = () => displayMenu(restaurantId, 'week');
}

async function displayMenu(restaurantId: number, period: 'day' | 'week') {
  const menuDisplay = document.getElementById('menu-display');
  if (!menuDisplay) return;

  const menu = await fetchMenu(restaurantId, period);
  menuDisplay.innerHTML = '';

  menu.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <h3>${item.day}</h3>
      <ul>
        ${item.meals.map(meal => `<li>${meal}</li>`).join('')}
      </ul>
    `;
    menuDisplay.appendChild(menuItem);
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      (registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      (error) => {
        console.log('ServiceWorker registration failed: ', error);
      }
    );
  });
}

displayRestaurants();
