function planByCalories() {
    //Generate Plan by Calories
    document.getElementById("mealPlan1").style.display = "block";

   /*  if (calPlan.style.display == "none") {

        calPlan.style.display = "block";
    } else {
        calPlan.style.display = "none";
    } */

}

function calcTotalCalories() {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)
    /* var userEntry = document.getElementById("totalCalories");
    document.write(userEntry); */
    document.getElementById("mealPlan1").style.backgroundColor = "red";
    
     var myDiv = document.getElementById("plan");
    myDiv.innerHTML = "<p>This is a test<p>";

    return false;
}

function planByMacros() {
    //Generate Play By Macros - a different way to do above
    calPlan = document.getElementById("mealPlan1");

    if (calPlan.style.display == "none") {

        calPlan.style.display = "block";
    } else {
        calPlan.style.display = "none";
    }

}
/* 
function generatePlan() {
    //Generate Meal Plan
    <!-- The Final Meal Plan Calendar-->
    <div class="mealPlan" id="mealPlan1">
        <table class="table">
            <thead class="table-primary">
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
                    <td>meal1</td>
                    <td>meal3</td>
                    <td>meal5</td>
                    <td>meal7</td>
                    <td>meal9</td>
                    <!--         <td>meal11</td>
                        <td>meal13</td> -->
                </tr>
                <tr>
                    <th scope="row">Dinner</th>
                    <td>meal2</td>
                    <td>meal4</td>
                    <td>meal6</td>
                    <td>meal8</td>
                    <td>meal10</td>
                    <!--   <td>meal12</td>
                        <td>meal14</td> -->
                </tr>
    
                </tr>
            </tbody>
    
    
        </table>
    </div>
} */

