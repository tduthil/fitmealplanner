function getRandomMeal() {
    //random meal selector
    return meals[Math.floor(Math.random()*meals.length)];
}

function generatePlan() {
    //generate a plan based on number of meals needed
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
    document.getElementById("mealPlan1").innerHTML = `<p><strong>Max Calories For Lunch & Dinner:  ${maxCal}</strong></p><br><table class="table plan">
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
            <td><a href="#" onclick="buildModal(0)" id="zero" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[0].name}</a></td>
            <td><a href="#" onclick="buildModal(1)" id="one" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[1].name}</a></td>
            <td><a href="#" onclick="buildModal(2)" id="two" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[2].name}</a></td>
            <td><a href="#" onclick="buildModal(3)" id="three" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[3].name}</a></td>
            <td><a href="#" onclick="buildModal(4)" id="four" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[4].name}</a></td>
            <!--         <td>meal11</td>
                <td>meal13</td> -->
        </tr>
        <tr>
            <th scope="row">Dinner</th>
            <td><a href="#" onclick="buildModal(5)" id="five" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[5].name}</a></td>
            <td><a href="#" onclick="buildModal(6)" id="six" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[6].name}</a></td>
            <td><a href="#" onclick="buildModal(7)" id="seven" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[7].name}</a></td>
            <td><a href="#" onclick="buildModal(8)" id="eight" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[8].name}</a></td>
            <td><a href="#" onclick="buildModal(9)" id="nine" class="popup" data-toggle="modal" data-target="#mealModal">${weeklyPlan[9].name}</a></td>
            <!--   <td>meal12</td>
                <td>meal14</td> -->
        </tr>

        </tr>
    </tbody>


</table>
</div>`; 
    //console.log("table built");
    return true;
    
}

function buildModal(index) {
    //build Modal populate content based on a given index - modal template
    plan = weeklyPlan;
    
    let i = index;
    
    //console.log("modal generated");

    return document.getElementById("mealModalBody").innerHTML = `<div class="modal fade" id="mealModal" tabindex="-1" role="dialog" aria-labelledby="calorieModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${plan[i].name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">  
                <img class="card-img-top item" src="img/${plan[i].src}" alt="Card image cap">
                <div class="modal-content">
                    <p>Cal:${plan[i].calories} Protein: ${plan[i].protein} Carbs: ${plan[i].carbs} Fats: ${plan[i].fat}</p>
                </div> 
            </div>
        </div>
    </div>`; 
}
 
function buildCards() {
    //build Menu Cards
    let content;

    for (i= 0; i < meals.length; i++) {
        
        (content = document.createElement('div')).innerHTML= `<div class="card"><img src="img/${meals[i].src}" class="card-img-top" alt="menu card"><div class="card-img-overlay">
        <h5 class="card-title text-center">${meals[i].name}</h5></div></div>`;
        document.getElementById('menuDiv').appendChild(content);
    }

    /*   for (var i = 0; i <= adees.length(); i++) {
        x = document.createElement('div').innerHTML = "<label class='bo bp'><input type='checkbox' name='adees[" + adees[i] + "]' value=" + adees[i] + ">Test " + adees[i] + "</label></div>";
        document.body.appendChild(x);
    };  */
    console.log("image created");
    
    
}

function imageCardContent(index) {
    i = index;
    return `<div class="card">
    <img src="img/${meals[i].src}" class="card-img-top" alt="...">
    </div>`;
}
    
function planByCalories() {
    //Meal Plan will use 60% of total calories entered by user (2 meals per day)
    
    //generate weekly plan array
    weeklyPlan = generatePlan();

    //generate table using weeklyPlan
    generateTable(getMaxCal());

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

function getId(index) {
    //return index value
    index = index;
    if (index === 0) {
        return 0;
    } else if (index === 1) {
        return 1;
    
    } else if (index === 2) {
        return 2;
    
    } else if (index === 3) {
        return 3;
    
    } else if (index === 4) {
        return 4;

    } else if (index === 5) {
        return 5;
    
    } else if (index === 6) {
        return 6;
    
    } else if (index === 7) {
        return 7;
    
    } else if (index === 8) {
        return 8;

    } else if (index === 9) {
        return 9;
    
    } else {
        return 0;
    }

}

// popovers initialization - on hover
$('.itemOne').hover(function() {
    $('.item1').toggle();
});