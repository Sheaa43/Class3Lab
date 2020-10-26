//Part 1 of Lab

function calculateLateFees()
{
    var bookReturn = prompt("How many books are you returning");

    bookReturn = parseFloat(bookReturn);

    var dvdReturn = prompt("How many DVDs are you returning");

    dvdReturn = parseFloat(dvdReturn);

    var daysLate = prompt("How many days late are these items?");

    daysLate = parseFloat(daysLate);

    //Book Late Fees
    var bookLateFees = bookReturn * 0.25;

    //DVD Late Fees
    var dvdLateFees = dvdReturn * 0.50;

    //Total Late Fee
    var totalLateFees = bookLateFees + dvdLateFees;

    var finalCosts = totalLateFees + daysLate;

    //Round for display!!
    var totalLibraryLateFees = totalLateFees.toFixed(3);

    //Display total late fees
    alert("Your late fees are $" + finalCosts);
}

//Part 2 of the Lab

function pizzaCost()
{
    var numberOfToppings = prompt("How many toppings are you adding?");

    numberOfToppings = parseFloat(numberOfToppings);

    var numberOfPeople = prompt("How many people are eating?");

    numberOfPeople = parseFloat(numberOfPeople);


    var priceOfToppings = numberOfToppings * 1.25;

    var pizzaToppingsCost = 15 + priceOfToppings;

    var total = pizzaToppingsCost / numberOfPeople;

    //Display!!
    var totalCostDisplay = total.toFixed(2);


    //Display total cost per person
    alert("The cost per person is $" + total);
}