
//create array of meal
const meals = [{name:"BBQ Beef with Mac 'N Cheese", calories: 600, protein: 51, fat: 22, carbs: 54},
		{name:"Pulled Pork Carnitas", calories: 480, protein: 50, fat: 20, carbs: 27},
		{name:"Pizza", calories: 500, protein: 51, fat: 22, carbs: 54},
		{name:"Tampa Beef", calories: 400, protein: 51, fat: 22, carbs: 54},
		{name:"Mac 'N Cheese", calories: 300, protein: 51, fat: 22, carbs: 54},
		{name:"Bologna Sandwich", calories: 500, protein: 51, fat: 22, carbs: 54},
		{name:"Grilled Cheese", calories: 600, protein: 51, fat: 22, carbs: 54},
		{name:"BBQ Bacon Cheeseburger", calories: 300, protein: 51, fat: 22, carbs: 54},
		{name:"Spaghetti Meatballs", calories: 700, protein: 51, fat: 22, carbs: 54},
		{name:"Chicken N Rice", calories: 500, protein: 51, fat: 22, carbs: 54},
		{name:"Shredded Beef and Potatoes", calories: 500, protein: 51, fat: 22, carbs: 54},
		{name:"Egg Rolls and Rice", calories: 550, protein: 51, fat: 22, carbs: 54},
		{name:"Tuna Tartar", calories: 400, protein: 51, fat: 22, carbs: 54},
		{name:"Refried Beans and Broccoli", calories: 470, protein: 51, fat: 22, carbs: 54},
		{name:"Tuna Salad", calories: 350, protein: 51, fat: 22, carbs: 54},]

function getRandomMeal() {
    //random meal selector
    return meals[Math.floor(Math.random()*meals.length)];
}

function generatePlan() {
    //choose 2 random meals per days of the week
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const mealTime = ["lunch", "dinner"]
    let weeklyPlan = [];
    //meal = "";
   
    for(day in daysOfWeek){
        meal = getRandomMeal();
        for(time in mealTime){
            if(!weeklyPlan.includes(meal)) {
                weeklyPlan.push(meal);
            }
            else {
                break;
            }
        }
    }

    console.log(weeklyPlan);

}


function tableToggler() {
    //Generate Plan by Calories
    document.getElementById("mealPlan1").style.display = "block";

    if (calPlan.style.display == "block") {

        calPlan.style.display = "none";
    } 

}

    
function planByCalories() {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)
    
    var maxCal = document.getElementById("totalCalories").value *.60;

    

    //document.getElementById("meals").innerHTML = randomMeal.name;

    //console.log(randomMeal.name);

    document.getElementById("mealPlan1").innerHTML = `<p>Max Calories For Lunch & Dinner:  ${maxCal}</p><br><table class="table">
                <thead class="table-warning">
                    <tr>
                        <th></th>
                        <!-- <th>Sunday</th> -->
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <!--                 <th>Saturday</th>
            -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Lunch</th>
                        <td>${getRandomMeal().name}</td>
                        <td>${getRandomMeal().name}</td>
                        <td>${meal5.name}</td>
                        <td>${meal7.name}</td>
                        <td>${meal9.name}</td>
                        <!--         <td>meal11</td>
                            <td>meal13</td> -->
                    </tr>
                    <tr>
                        <th scope="row">Dinner</th>
                        <td>${meal2.name}</td>
                        <td>${meal4.name}</td>
                        <td>${meal6.name}</td>
                        <td>${meal8.name}</td>
                        <td>${meal10.name}</td>
                        <!--   <td>meal12</td>
                            <td>meal14</td> -->
                    </tr>
        
                    </tr>
                </tbody>
        
        
            </table>
        </div>`; 

    return false; 

}

function planByMacros() {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)

    var maxMacros = .60 * ((document.getElementById("protein").value * 4) + (document.getElementById("carbs").value * 4) + (document.getElementById("fats").value * 9));

    //write code to create meals
    var meal1 = {name:"BBQ Beef with Mac 'N Cheese", calories: 600, protein: 51, fat: 22, carbs: 54};
    var meal2 = {name:"Pulled Pork Carnitas", calories: 480, protein: 50, fat: 20, carbs: 27};
    var meal3 = {name:"Pizza", calories: 500, protein: 51, fat: 22, carbs: 54};
    var meal4 = {name:"BBQ Beef", calories: 400, protein: 51, fat: 22, carbs: 54};
    var meal5 = {name:"Mac 'N Cheese", calories: 300, protein: 51, fat: 22, carbs: 54};
    var meal6 = {name:"Bologna Sandwich", calories: 500, protein: 51, fat: 22, carbs: 54};
    var meal7 = {name:"Grilled Cheese", calories: 600, protein: 51, fat: 22, carbs: 54};
    var meal8 = {name:"BBQ Bacon Doublecheeseburger", calories: 300, protein: 51, fat: 22, carbs: 54};
    var meal9 = {name:"Spaghetti Meatballs", calories: 700, protein: 51, fat: 22, carbs: 54};
    var meal10 = {name:"Chicken N Rice", calories: 500, protein: 51, fat: 22, carbs: 54};
    var meal11 = {name:"Shredded Beef and Potatoes", calories: 500, protein: 51, fat: 22, carbs: 54};
    var meal12 = {name:"Egg Rolls and Rice", calories: 550, protein: 51, fat: 22, carbs: 54};
    var meal13 = {name:"Tuna Tartar", calories: 400, protein: 51, fat: 22, carbs: 54};
    var meal14 = {name:"Refried Beans and Broccoli", calories: 470, protein: 51, fat: 22, carbs: 54};
    var meal15 = {name:"Tuna Salad", calories: 350, protein: 51, fat: 22, carbs: 54};
    
    //create table

    document.getElementById("mealPlan1").innerHTML = `<p>Max Calories For Lunch & Dinner:  ${maxMacros}</p><br><table class="table">
                <thead class="table-warning">
                    <tr>
                        <th></th>
                        <!-- <th>Sunday</th> -->
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <!--                 <th>Saturday</th>
            -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Lunch</th>
                        <td>${meal1.name}</td>
                        <td>${meal3.name}</td>
                        <td>${meal5.name}</td>
                        <td>${meal7.name}</td>
                        <td>${meal9.name}</td>
                        <!--         <td>meal11</td>
                            <td>meal13</td> -->
                    </tr>
                    <tr>
                        <th scope="row">Dinner</th>
                        <td>${meal2.name}</td>
                        <td>${meal4.name}</td>
                        <td>${meal6.name}</td>
                        <td>${meal8.name}</td>
                        <td>${meal10.name}</td>
                        <!--   <td>meal12</td>
                            <td>meal14</td> -->
                    </tr>
        
                    </tr>
                </tbody>
        
        
            </table>
        </div>`; 

    return false; 

}
