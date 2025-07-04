const trending = [
  {
    title: "Beyond Earth",
    year: 2020,
    category: "Movie",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Bottom Gear",
    year: 2021,
    category: "Movie",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Undiscovered Cities",
    year: 2019,
    category: "TV Series",
    rating: "E",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
  }
];

const recommended = [
  {
    title: "The Great Lands",
    year: 2019,
    category: "Movie",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The Diary",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Earth’s Untouched",
    year: 2017,
    category: "Movie",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "No Land Beyond",
    year: 2019,
    category: "Movie",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "During The Hunt",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1549921296-3a25f4f7f047?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Autosport: The Series",
    year: 2015,
    category: "TV Series",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Same Answer II",
    year: 2020,
    category: "TV Series",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Below Echo",
    year: 2015,
    category: "TV Series",
    rating: "PG",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
  }
];

function createCard(item) {
  return `
    <div class="card">
      <img src="${item.image}" alt="${item.title}" />
      <div class="info">
        <p>${item.year} • ${item.category} • ${item.rating}</p>
        <h4>${item.title}</h4>
      </div>
    </div>
  `;
}

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(createCard).join("");
}

renderCards(trending, "trendingContainer");
renderCards(recommended, "recommendedContainer");

document.getElementById("searchInput").addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  const filteredTrending = trending.filter(item =>
    item.title.toLowerCase().includes(value)
  );
  const filteredRecommended = recommended.filter(item =>
    item.title.toLowerCase().includes(value)
  );

  renderCards(filteredTrending, "trendingContainer");
  renderCards(filteredRecommended, "recommendedContainer");
});
