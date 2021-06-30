  // popovers initialization - on hover
$('.itemOne').hover(function() {
	$('.item1').toggle();
});

function getRandomMeal() {
    //random meal selector
    return meals[Math.floor(Math.random()*meals.length)];
}

function generatePlan() {
    //choose 2 random meals per days of the week
    //const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    //const mealTime = ["lunch", "dinner"]
    let weeklyPlan = [];
 
    for (; weeklyPlan.length < 10;) {
        meal = getRandomMeal();
        if(!weeklyPlan.includes(meal)) {
            weeklyPlan.push(meal);
                //console.log(meal);
            }
        else {
            continue;
        }
    }

    return weeklyPlan;

}


/* function tableToggler() {
    //Generate Plan by Calories
    document.getElementById("mealPlan1").style.display = "block";

    if (calPlan.style.display == "block") {

        calPlan.style.display = "none";
    } 

} */

function getMaxCal() {
    //calculate max calories base on user input
    var maxCal;
    
    maxCal = document.getElementById("totalCalories").value *.60;
   
    return maxCal;
}

function getMaxCalbyMacros() {
    //calculate max calories based on user provided macros
    var maxCal;

    maxCal = .60 * ((document.getElementById("protein").value * 4) + (document.getElementById("carbs").value * 4) + (document.getElementById("fats").value * 9));

    return maxCal;
}

function generateTable(maxCal) {
    //Create table using the max calories inputed by the user

    return document.getElementById("mealPlan1").innerHTML = `<p><strong>Max Calories For Lunch & Dinner:  ${maxCal}</strong></p><br><table class="table plan">
    <thead class="table-dark">
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
    <tbody class="table-info">
        <tr>
            <th scope="row">Lunch</th>
            <td><a onClick="getId()" href="#" id="0" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[0].name}</a></td>
            <td><a onClick="getId()" href="#" id="1" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[1].name}</a></td>
            <td><a onClick="getId()" href="#" id="2" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[2].name}</a></td>
            <td><a onClick="getId()" href="#" id="3" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[3].name}</a></td>
            <td><a onClick="getId()" href="#" id="4" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[4].name}</a></td>
            <!--         <td>meal11</td>
                <td>meal13</td> -->
        </tr>
        <tr>
            <th scope="row">Dinner</th>
            <td><a onClick="getId()" href="#" id="5" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[5].name}</a></td>
            <td><a onClick="getId()" href="#" id="6" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[6].name}</a></td>
            <td><a onClick="getId()" href="#" id="7" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[7].name}</a></td>
            <td><a onClick="getId()" href="#" id="8" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[8].name}</a></td>
            <td><a onClick="getId()" href="#" id="9" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[9].name}</a></td>
            <!--   <td>meal12</td>
                <td>meal14</td> -->
        </tr>

        </tr>
    </tbody>


</table>
</div>`; 
}
    
function planByCalories() {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)
    
    //generate weekly plan array
    weeklyPlan = generatePlan();

    //generate table using weeklyPlan
    generateTable(getMaxCal());

    //build modal based on weeklyPlan
    buildModal(weeklyPlan);

    return false; 

}

function planByMacros() {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)

    //generate weekly plan array
    weeklyPlan = generatePlan();

    //generate table using max Calories from Macros
    generateTable(getMaxCalbyMacros());

    

    return false;

}

function buildModal(weeklyPlan) {
    weeklyPlan = weeklyPlan;
    
    i = 0;
    
    
    return document.getElementById("mealModalBody").innerHTML = `<div class="modal fade" id="mealModal" tabindex="-1" role="dialog" aria-labelledby="calorieModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${weeklyPlan[i].name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">  
                <img class="card-img-top item" src="img/BBQ_Thin_2.png" alt="Card image cap">
                <div class="modal-content">
                    <p>Cal:${weeklyPlan[0].calories} Protein: ${weeklyPlan[0].protein} Carbs: ${weeklyPlan[0].carbs} Fats: ${weeklyPlan[0].fat}</p>
                </div> 
            </div>
        </div>
    </div>` ;
}


//<a href="#" id="pager_1" class="pagerlink" >link</a>

function getId() {

    id = this.event.target.id;

    if(id == '0'){
        id = 0;
    } else {
        id = "HELP!";
    }
    console.log(id);
    console.log(typeof(id));
    return id;
   
}
   
