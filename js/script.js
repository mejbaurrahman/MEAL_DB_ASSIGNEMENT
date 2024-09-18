const loadFood = async (searchText) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  );
  const data = await res.json();
  showData(data.meals, searchText);
};

loadFood("");

const showData = (meals, text) => {
  const mealCard = document.getElementById("meal-card-full");
  const mealCard2 = document.getElementById("meal-card-category");
  mealCard.style.display = "none";
  mealCard2.style.display = "none";
  if (text === "") {
    mealCard.innerHTML = "";
    mealCard.style.display = "grid";
    if (meals.length > 0) {
      console.log("Enter in");
      meals?.forEach((meal) => {
        const card = document.createElement("div");
        card.classList.add("p-4");

        card.innerHTML = `
          <div
                  class="card h-full bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <figure>
                    <img class=""
                      src=${meal.strMealThumb}
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">${meal.strMeal}</h2>
                    <p>${meal.strInstructions.substring(0, 100)}</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
          
          `;
        mealCard.appendChild(card);
      });
    }
  } else {
    mealCard2.innerHTML = "";
    mealCard2.style.display = "grid";
    if (meals.length > 0) {
      console.log("Enter in");
      meals?.forEach((meal) => {
        console.log(meal);
        const card = document.createElement("div");
        card.classList.add("p-4");
        card.classList.add("h-96");
        card.innerHTML = `
          <div
                  class="card bg-base-100 h-full shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <figure>
                    <img
                      src=${meal.strMealThumb}
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">${meal.strMeal}</h2>
                    <p>${meal.strInstructions.substring(0, 100)}</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
          
          `;
        mealCard2.appendChild(card);
      });
    }
  }
};
