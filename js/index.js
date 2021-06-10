function planByCalories() {
    //Generate Plan by Calories
    document.getElementById("mealPlan1").style.display = "block";

   /*  if (calPlan.style.display == "none") {

        calPlan.style.display = "block";
    } else {
        calPlan.style.display = "none";
    } */

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

function calcTotalCalories(totalCalories) {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)
    return document.getElementById("form-group").innerHTML(totalCalories * .60);
}