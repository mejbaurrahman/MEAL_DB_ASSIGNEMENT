const loadFood = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  const data = await res.json();

  showData(data.meals);
};

loadFood();

const showData = (meals) => {
  const mealCard = document.getElementById("meal-card");
  if (meals.length > 0) {
    console.log("Enter in");
    meals?.forEach((meal) => {
      console.log(meal);
      const card = document.createElement("div");
      card.classList.add("p-4");
      card.innerHTML = `
        <div
                class="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <figure>
                  <img
                    src=${meal.strMealThumb}
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${meal.strMeal}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
        
        `;
      mealCard.appendChild(card);
    });
  }
};
