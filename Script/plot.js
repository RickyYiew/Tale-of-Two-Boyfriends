var storyline = [];
var choices = [];
var bogOpening, bogDisruption, bodOpening, bodDisruption, bogCrisis, bodCrisis;
var bogOpeningPlots = ["Encounter", "Dating", "In a relationship", 'Pursued by BOG'],
    bodOpeningPlots = ["Encounter", "Dating", 'Pursued by BOD'],
    bogDisruptionPlots = ["Disagreement in belief"],
    bodDisruptionPlots = ["Admire boyfriend's personality"],
    bogCrisisPlots = ["None", "Moral conflict"],
    bodCrisisPlots = ["None", "Family doesn't like BOD"],
    ChoicePlots = ["Break up", "Continue with this relationship"];
var status = "none";
var selections = [];
var step = 1;
var bogFilled = false,
    bodFilled = false;
var obligation = 5,
    obligString = '5';
var GD1 = 0,
    GD2 = 0,
    GC1 = 0,
    GC2 = 0,
    DD1 = 1,
    DD2 = 0,
    DD3 = 0,
    DC1 = 0,
    DC2 = 0,
    DC3 = 0;
var first = true,
    lastMeter;
var string1 = "",
    string2 = "",
    string3 = "",
    string4 = "";



$(document).ready(function () {


    updateMeter();

    bogOpening = {
        slot: $("#BOG-Opening"),
        bf: "bog",
        stage: "opening",
        selected: false,
        plot: ""
    }
    bogDisruption = {
        slot: $("#BOG-Disruption"),
        bf: "bog",
        stage: "disruption",
        selected: false,
        plot: ""
    }
    bogCrisis = {
        slot: $("#BOG-Crisis"),
        bf: "bog",
        stage: "crisis",
        selected: false,
        plot: ""
    }
    bogChoice = {
        slot: $("#BOG-Choice"),
        bf: "bog",
        stage: "choice",
        selected: false,
        plot: ""
    }
    bodOpening = {
        slot: $("#BOD-Opening"),
        bf: "bod",
        stage: "opening",
        selected: false,
        plot: ""
    }
    bodDisruption = {
        slot: $("#BOD-Disruption"),
        bf: "bod",
        stage: "disruption",
        selected: false,
        plot: ""
    }
    bodCrisis = {
        slot: $("#BOD-Crisis"),
        bf: "bod",
        stage: "crisis",
        selected: false,
        plot: ""
    }
    bodChoice = {
        slot: $("#BOD-Choice"),
        bf: "bod",
        stage: "choice",
        selected: false,
        plot: ""
    }
    consequence = {
        slot: $("#Consequence"),
        stage: "consequence",
        plot: ""
    }

    storyline.push(bogOpening, bodOpening, bogDisruption, bodDisruption, bogCrisis, bodCrisis, bogChoice, bodChoice);

    var choice1 = {
        slot: $("#slot1"),
        plot: "0"
    }
    var choice2 = {
        slot: $("#slot2"),
        plot: "0"
    }
    var choice3 = {
        slot: $("#slot3"),
        plot: "0"
    }
    var choice4 = {
        slot: $("#slot4"),
        plot: "0"
    }
    var choice5 = {
        slot: $("#slot5"),
        plot: "0"
    }


    choices.push(choice1, choice2, choice3, choice4, choice5);




    bogOpening.slot.click(function () {

            if (step === 1) {
                if (bogFilled === true) {
                    obligation = lastMeter;
                    updateMeter();
                }
                deselect();
                bogOpeningSelected();
                bogFilled = false;

            }




        }

    )
    bodOpening.slot.click(function () {
        if (step === 1) {
            deselect();
            bodOpeningSelected();
            bodFilled = false;
        }

    })

    bogDisruption.slot.click(function () {
        if (step === 2) {
            if (bogFilled === true) {
                obligation = lastMeter;
                updateMeter();
            }
            deselect();
            bogDisruptionSelected();
            bogFilled = false;
        }
    })

    bodDisruption.slot.click(function () {
        if (step === 2) {
            if (bodFilled === true) {
                obligation = lastMeter;
                updateMeter();
            }
            deselect();
            bodDisruptionSelected();
            bodFilled = false;

        }
    })
    bogCrisis.slot.click(function () {
        if (step === 3) {
            if (bogFilled === true) {
                obligation = lastMeter;
                updateMeter();
            }
            deselect();
            bogCrisisSelected();
            bogFilled = false;
        }
    })

    bodCrisis.slot.click(function () {
        if (step === 3) {
            if (bodFilled === true) {
                obligation = lastMeter;
                updateMeter();
            }
            deselect();
            bodCrisisSelected();
            bodFilled = false;
        }
    })

    bogChoice.slot.click(function () {
        if (step === 4) {
            deselect();
            bogChoiceSelected();
            bogFilled = false;
        }
    })

    bodChoice.slot.click(function () {
        if (step === 4) {
            deselect();
            bodChoiceSelected();
            bodFilled = false;
        }
    })


    $("#restart").click(function () {
        restart();
    })

    $("#step2-next").click(function () {

        result();

        $("#step3").removeClass("hidden");
        $("#step2").addClass("hidden");
    })

    $("#step3-next").click(function () {
        location.reload();
    })

    for (i = 0; i < 5; i++) {
        choices[i].slot.click(function () {
            if (status === "consequence") {
                $("#plotInstruct").text('You can click the "next" button below to continue. You can also click the icon on the left to restart.');
                choices[0].plot = "0";
                hideExtra();

                if (bogChoice.plot === "Continue with this relationship") {
                    $("#Consequence").css("background-color", "#7660e2");
                    $("#endResult").css("border", "2px solid #7660e2");
                    if (obligation > 5) {
                        consequence.plot = "Happy with BOG";
                    } else {
                        consequence.plot = "Sad with BOG";
                    }
                }

                if (bodChoice.plot === "Continue with this relationship") {
                    $("#Consequence").css("background-color", "#d74276");
                    $("#endResult").css("border", "2px solid #d74276");
                    if (obligation > 5) {
                        consequence.plot = "Sad with BOD";
                    } else {
                        consequence.plot = "Happy with BOD";
                    }
                }

                if (bogChoice.plot === "Break up" && bodChoice.plot === "Break up") {
                    $("#Consequence").css("background-color", "#d74276");
                    $("#endResult").css("border", "2px solid #d74276");
                    consequence.plot = "Alone at last";
                }

                $("#Consequence").find('p').text(consequence.plot)

                $("#Consequence").css("display", "inline-block");
                $('#step2-next').removeAttr("disabled")
            }

            for (var j = 0; j < 8; j++) {

                if (storyline[j].selected === true) {

                    deselect();

                    storyline[j].slot.find("p").text($(this).find('p').text());

                    storyline[j].plot = $(this).find('p').text();

                    //How your choice influence attractiveness

                    lastMeter = obligation;

                    switch (storyline[j].plot) {
                        case "In a relationship":
                            obligation = obligation + 1;
                            break;

                        case "Suspicious of disloyalty":
                            obligation = obligation - 2;
                            break;

                        case "BOG is jealous":
                            obligation = obligation - 1;
                            break;

                        case "Suffer from violence":
                            obligation = obligation - GD1;
                            break;

                        case "Disagreement in belief":
                            obligation = obligation - 1;
                            break;

                        case "Unhappy with the lifestyle":
                            obligation = obligation - GD2;
                            break;

                        case "Admire boyfriend's personality":
                            obligation = obligation - DD1;
                            break;

                        case "Seduced":
                            obligation = obligation - 2;
                            break;

                        case "Tempted by wealth":
                            obligation = obligation - 2;
                            break;

                        case "Tempted by authority":
                            obligation = obligation - DD2;
                            break;

                        case "Get emotional support":
                            obligation = obligation - DD3;
                            break;

                        case "Moral conflict":
                            obligation = obligation + 2;
                            break;

                        case "BOG compromises with you":
                            obligation = obligation + GC1;
                            break;

                        case "Get threatened by BOG":
                            obligation = obligation + GC2;
                            break;

                        case "Family doesn't like BOD":
                            obligation = obligation + 2;
                            break;

                        case "Fear of powerlessness":
                            obligation = obligation + DC1;
                            break;

                        case "Fear of poverty":
                            obligation = obligation + 2;
                            break;

                        case "Fear of being cheated by BOD":
                            obligation = obligation + DC3;
                            break;
                    }





                    updateMeter();
                    //Plot sequence & logic
                    switch (status) {
                        case "bog-opening":
                            bogFilled = true;
                            whatYouCanPick();
                            if (bogFilled === true && bodFilled === true) {


                                bogFilled = false;
                                bodFilled = false;
                                bogDisruption.slot.show();
                                bodDisruption.slot.show();
                                bogDisruptionSelected();

                                bogOpening.slot.removeClass("storyCard");
                                bogOpening.slot.addClass("disabledCard1");

                                bodOpening.slot.removeClass("storyCard");
                                bodOpening.slot.addClass("disabledCard2");

                                step = step + 1;



                            } else {
                                bodOpeningSelected();
                            }
                            break;

                        case "bod-opening":
                            bodFilled = true;
                            whatYouCanPick();



                            if (bogFilled === true && bodFilled === true) {


                                bogFilled = false;
                                bodFilled = false;
                                bogDisruption.slot.show();
                                bodDisruption.slot.show();
                                bogDisruptionSelected();

                                bogOpening.slot.removeClass("storyCard");
                                bogOpening.slot.addClass("disabledCard1");

                                bodOpening.slot.removeClass("storyCard");
                                bodOpening.slot.addClass("disabledCard2");

                                step = step + 1;



                            } else {
                                bogOpeningSelected();
                            }
                            break;

                        case "bog-disruption":
                            bogFilled = true;




                            if (bogFilled === true && bodFilled === true) {

                                bogFilled = false;
                                bodFilled = false;
                                bogCrisis.slot.show();
                                bodCrisis.slot.show();
                                bogCrisisSelected();

                                bogDisruption.slot.removeClass("storyCard");
                                bogDisruption.slot.addClass("disabledCard1");

                                bodDisruption.slot.removeClass("storyCard");
                                bodDisruption.slot.addClass("disabledCard2");

                                step = step + 1;



                            } else {
                                bodDisruptionSelected();
                            }
                            break;

                        case "bod-disruption":
                            bodFilled = true;




                            if (bogFilled === true && bodFilled === true) {

                                bogFilled = false;
                                bodFilled = false;
                                bogCrisis.slot.show();
                                bodCrisis.slot.show();
                                bogCrisisSelected();

                                bogDisruption.slot.removeClass("storyCard");
                                bogDisruption.slot.addClass("disabledCard1");

                                bodDisruption.slot.removeClass("storyCard");
                                bodDisruption.slot.addClass("disabledCard2");

                                step = step + 1;



                            } else {
                                bogDisruptionSelected();
                            }
                            break;



                        case "bog-crisis":
                            bogFilled = true;






                            if (bogFilled === true && bodFilled === true) {

                                bogFilled = false;
                                bodFilled = false;
                                bogChoice.slot.show();
                                bodChoice.slot.show();
                                bogChoiceSelected();

                                bogCrisis.slot.removeClass("storyCard");
                                bogCrisis.slot.addClass("disabledCard1");

                                bodCrisis.slot.removeClass("storyCard");
                                bodCrisis.slot.addClass("disabledCard2");
                                step = step + 1;


                            } else {
                                bodCrisisSelected();
                            }
                            break;

                        case "bod-crisis":
                            bodFilled = true;






                            if (bogFilled === true && bodFilled === true) {

                                bogFilled = false;
                                bodFilled = false;
                                bogChoice.slot.show();
                                bodChoice.slot.show();
                                bogChoiceSelected();

                                bogCrisis.slot.removeClass("storyCard");
                                bogCrisis.slot.addClass("disabledCard1");

                                bodCrisis.slot.removeClass("storyCard");
                                bodCrisis.slot.addClass("disabledCard2");
                                step = step + 1;


                            } else {
                                bogCrisisSelected();
                            }
                            break;


                        case "bog-choice":
                            bogFilled = true;





                            if (bogFilled === true && bodFilled === true) {

                                bogFilled = false;
                                bodFilled = false;

                                bogChoice.slot.removeClass("storyCard");
                                bogChoice.slot.addClass("disabledCard1");

                                bodChoice.slot.removeClass("storyCard");
                                bodChoice.slot.addClass("disabledCard2");
                                step = step + 1;
                                status = "consequence";
                                $("#plotInstruct").text("Now you can generate the ending of your storyline. You can also click the icon on the left to restart.");
                                distribute();


                            } else {
                                bodChoiceSelected();
                            }
                            break;

                        case "bod-choice":
                            bodFilled = true;





                            if (bogFilled === true && bodFilled === true) {

                                bogFilled = false;
                                bodFilled = false;

                                bogChoice.slot.removeClass("storyCard");
                                bogChoice.slot.addClass("disabledCard1");

                                bodChoice.slot.removeClass("storyCard");
                                bodChoice.slot.addClass("disabledCard2");
                                step = step + 1;
                                status = "consequence";
                                $("#plotInstruct").text("Now you can generate the ending of your storyline. You can also click the icon on the left to restart.");
                                distribute();

                            } else {
                                bogChoiceSelected();

                            }
                            break;



                    }








                    {
                        break;
                    }
                }
            }
        })


    }


})




function deselect() {
    for (var i = 0; i < 5; i++) {
        choices[i].plot = "0";
    }

    for (var j = 0; j < 8; j++) {

        if (storyline[j].selected === true) {
            storyline[j].slot.removeClass("selected1");
            storyline[j].slot.removeClass("selected2");
            storyline[j].slot.addClass("storyCard");
            storyline[j].selected = false;
            storyline[j].plot = "";

        }

    }

}

function bogOpeningSelected() {

    bogOpening.slot.removeClass("storyCard");
    bogOpening.slot.addClass("selected1");
    bogOpening.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector2");
    $(".plotSelector").addClass("plotSelector1");
    bogOpening.selected = true;
    $("#plotInstruct").text("Please choose the plot for opening situation with BOG.");
    status = "bog-opening";
    distribute();

}

function bodOpeningSelected() {

    bodOpening.slot.removeClass("storyCard");
    bodOpening.slot.addClass("selected2");
    bodOpening.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector1");
    $(".plotSelector").addClass("plotSelector2");
    bodOpening.selected = true;
    $("#plotInstruct").text("Please choose the plot for opening situation with BOD.");
    status = "bod-opening";
    distribute();
}

function bogDisruptionSelected() {
    bogDisruption.slot.removeClass("storyCard");
    bogDisruption.slot.addClass("selected1");
    bogDisruption.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector2");
    $(".plotSelector").addClass("plotSelector1");
    bogDisruption.selected = true;
    $("#plotInstruct").text("Please choose the plot that makes you want to break the obligation with BOG.");
    status = "bog-disruption";
    distribute();
}

function bodDisruptionSelected() {
    bodDisruption.slot.removeClass("storyCard");
    bodDisruption.slot.addClass("selected2");
    bodDisruption.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector1");
    $(".plotSelector").addClass("plotSelector2");
    bodDisruption.selected = true;
    $("#plotInstruct").text("Please choose the plot that attracts you to be with BOD.");
    status = "bod-disruption";
    distribute();
}

function bogCrisisSelected() {
    bogCrisis.slot.removeClass("storyCard");
    bogCrisis.slot.addClass("selected1");
    bogCrisis.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector2");
    $(".plotSelector").addClass("plotSelector1");
    bogCrisis.selected = true;
    $("#plotInstruct").text("Please choose the plot that holds you back into the obligation with BOG.");
    status = "bog-crisis";
    distribute();
}

function bodCrisisSelected() {
    bodCrisis.slot.removeClass("storyCard");
    bodCrisis.slot.addClass("selected2");
    bodCrisis.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector1");
    $(".plotSelector").addClass("plotSelector2");
    bodCrisis.selected = true;
    $("#plotInstruct").text("Please choose the plot that indicates the constraint of being with BOD.");
    status = "bod-crisis";
    distribute();
}

function bogChoiceSelected() {
    bogChoice.slot.removeClass("storyCard");
    bogChoice.slot.addClass("selected1");
    bogChoice.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector2");
    $(".plotSelector").addClass("plotSelector1");
    bogChoice.selected = true;
    $("#plotInstruct").text("Please choose if you want to continue the relationship with BOG.");
    status = "bog-choice";
    distribute();

}

function bodChoiceSelected() {
    bodChoice.slot.removeClass("storyCard");
    bodChoice.slot.addClass("selected2");
    bodChoice.slot.find("p").text(" ");
    $(".plotSelector").show();
    $(".plotSelector").removeClass("plotSelector1");
    $(".plotSelector").addClass("plotSelector2");
    bodChoice.selected = true;
    $("#plotInstruct").text("Please choose if you want to continue the relationship with BOD.");
    status = "bod-choice";
    distribute();
}

function hideExtra() {
    for (var i = 0; i < 5; i++) {
        if (choices[i].plot === "0") {
            choices[i].slot.hide();
        }
    }
}

function distribute() {

    switch (status) {
        case "bog-opening":
            for (var i = 0; i < bogOpeningPlots.length; i++) {
                choices[i].plot = bogOpeningPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bod-opening":
            for (var i = 0; i < bodOpeningPlots.length; i++) {
                choices[i].plot = bodOpeningPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bog-disruption":
            for (var i = 0; i < bogDisruptionPlots.length; i++) {
                choices[i].plot = bogDisruptionPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bod-disruption":
            for (var i = 0; i < bodDisruptionPlots.length; i++) {
                choices[i].plot = bodDisruptionPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bog-crisis":
            for (var i = 0; i < bogCrisisPlots.length; i++) {
                choices[i].plot = bogCrisisPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bod-crisis":
            for (var i = 0; i < bodCrisisPlots.length; i++) {
                choices[i].plot = bodCrisisPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bod-disruption":
            for (var i = 0; i < bodDisruptionPlots.length; i++) {
                choices[i].plot = bodDisruptionPlots[i];
                choices[i].slot.find("p").text(choices[i].plot);

            }
            hideExtra();
            break;

        case "bog-choice":
            if (bodChoice.plot === "Continue with this relationship") {
                choices[0].plot = "Break up";
                choices[0].slot.find("p").text(choices[0].plot);
            } else {
                for (var i = 0; i < ChoicePlots.length; i++) {
                    choices[i].plot = ChoicePlots[i];
                    choices[i].slot.find("p").text(choices[i].plot);
                }

            }
            hideExtra();
            break;
        case "bod-choice":
            if (bogChoice.plot === "Continue with this relationship") {
                choices[0].plot = "Break up";
                choices[0].slot.find("p").text(choices[0].plot);
            } else {
                for (var i = 0; i < ChoicePlots.length; i++) {
                    choices[i].plot = ChoicePlots[i];
                    choices[i].slot.find("p").text(choices[i].plot);
                }

            }
            hideExtra();

            break;

        case "consequence":
            choices[0].plot = "Generate the Consequence";
            choices[0].slot.find("p").text(choices[0].plot);

            hideExtra();
    }

}

function restart() {
    step = 1;
    status = "none";
    selections = [];
    bogFilled = false;
    bodFilled = false;
    consequence.slot.hide();
    deselect();
    hideExtra();
    $("#plotInstruct").text("Please click either box above to start.");
    $('#step2-next').attr("disabled", "disabled");
    obligation = 5;
    updateMeter();


    for (var j = 0; j < 8; j++) {

        storyline[j].slot.removeClass("selected1");
        storyline[j].slot.removeClass("selected2");

        storyline[j].slot.removeClass("disabledCard1");
        storyline[j].slot.removeClass("disabledCard2");
        storyline[j].slot.addClass("storyCard");
        storyline[j].selected = false;
        storyline[j].plot = "";
        storyline[j].slot.find('p').text('');

        if (j > 1) {
            storyline[j].slot.hide();
        }


    }
}

function updateMeter() {
    obligString = obligation.toString();
    $('#jqmeter-container').jQMeter({
        goal: '10',
        raised: obligString,
        meterOrientation: 'horizontal',
        height: '2vh',
        displayTotal: false,
        barColor: '#7660e2',
        bgColor: '#d74276',
        animationSpeed: 500,
        counterSpeed: 500

    });
}

function whatYouCanPick() {
    if (first === true) {

        for (var i = 0; i < BOGattr.length; i++) {

            if (BOGattr[i].attr === "Manipulative" || BOGattr[i].attr === "Dictatorial" || BOGattr[i].attr === "Menacing" || BOGattr[i].attr === "Controlling" || BOGattr[i].attr === "Despotic" || BOGattr[i].attr === "Violating" || BOGattr[i].attr === "Abusive" || BOGattr[i].attr === "Tyrannical" || BOGattr[i].attr === "Sadistic") {
                GD1 = GD1 + 1
                if (GD1 > 3) {
                    GD1 = 3
                }

            }


            if (BOGattr[i].attr === "Unfaithful") {
                bogDisruptionPlots.push("Suspicious of disloyalty")
            }


            if (BOGattr[i].attr === "Withholding" || BOGattr[i].attr === "Cloying" || BOGattr[i].attr === "Cool" || BOGattr[i].attr === "Objectifying" || BOGattr[i].attr === "Impotent" || BOGattr[i].attr === "Rule-based" || BOGattr[i].attr === "Exploitative" || BOGattr[i].attr === "Abusive" || BOGattr[i].attr === "Snobbish" || BOGattr[i].attr === "Sadistic" || BOGattr[i].attr === "Conformist") {
                GD2 = GD2 + 1;
                if (GD2 > 3) {
                    GD2 = 3
                }

            }

            if (BOGattr[i].attr === "Jealous") {
                bogDisruptionPlots.push("BOG is jealous")
            }


            if (BOGattr[i].attr === "Legal" || BOGattr[i].attr === "Rational" || BOGattr[i].attr === "Knowledge" || BOGattr[i].attr === "Legal system" || BOGattr[i].attr === "Egalitarian" || BOGattr[i].attr === "Sheltering" || BOGattr[i].attr === "Supportive" || BOGattr[i].attr === "Encouraging" || BOGattr[i].attr === "Amorous") {
                GC1 = GC1 + 1;
                if (GC1 > 3) {
                    GC1 = 3
                }
            }


            if (BOGattr[i].attr === "Legal" || BOGattr[i].attr === "Physical" || BOGattr[i].attr === "Fighting" || BOGattr[i].attr === "Legal system" || BOGattr[i].attr === "Righteous" || BOGattr[i].attr === "Gallant") {
                GC2 = GC2 + 1;
                if (GC2 > 3) {
                    GC2 = 3
                }

            }

        }

        if (GD1 !== 0) {
            bogDisruptionPlots.push("Suffer from violence")
        }

        if (GD2 !== 0) {
            bogDisruptionPlots.push("Unhappy with the lifestyle")
        }

        if (GC1 !== 0) {
            bogCrisisPlots.push("BOG compromises with you")
        }

        if (GC2 !== 0) {
            bogCrisisPlots.push("Get threatened by BOG")
        }

        var n = 0,
            m = 0;

        for (var i = 0; i < BODattr.length; i++) {

            if (BODattr[i].attr === "Pacifist" || BODattr[i].attr === "Egalitarian" || BODattr[i].attr === "Gallant" || BODattr[i].attr === "Friendly" || BODattr[i].attr === "Communitarian" || BODattr[i].attr === "Rational") {
                DD1 = DD1 + 1
                if (DD1 > 3) {
                    DD1 = 3
                }

            }


            if (BODattr[i].attr === "Sexuality" || BODattr[i].attr === "Indulgent") {
                n = n + 1;

            }

            if (BODattr[i].attr === "Financial" || BODattr[i].attr === "Wealth") {
                m = m + 1;
            }


            if (BODattr[i].attr === "Legal" || BODattr[i].attr === "Physical" || BODattr[i].attr === "Legal system" || BODattr[i].attr === "Fighting") {
                DD2 = DD2 + 1;
                if (DD2 > 3) {
                    DD2 = 3
                }

            }

            if (BODattr[i].attr === "Sheltering" || BODattr[i].attr === "Supportive" || BODattr[i].attr === "Encouraging" || BODattr[i].attr === "Amorous") {
                DD3 = DD3 + 1;
                if (DD3 > 3) {
                    DD3 = 3
                }

            }


            if (BODattr[i].attr === "Impotent" || BODattr[i].attr === "Rule-based" || BODattr[i].attr === "Conformist" || BODattr[i].attr === "Pacifist") {
                DC1 = DC1 + 1;
                if (DC1 > 3) {
                    DC1 = 3
                }
            }

            if (BODattr[i].attr === "Wealth" || BODattr[i].attr === "Financial") {
                DC2 = DC2 + 1;
            }

            if (BODattr[i].attr === "Manipulative" || BODattr[i].attr === "Dictatorial" || BODattr[i].attr === "Menancing" || BODattr[i].attr === "Withholding" || BODattr[i].attr === "Controlling" || BODattr[i].attr === "Despotic" || BODattr[i].attr === "Violating" || BODattr[i].attr === "Exploitative" || BODattr[i].attr === "Unfaithful" || BODattr[i].attr === "Abusive" || BODattr[i].attr === "Tyrannical" || BODattr[i].attr === "Cool" || BODattr[i].attr === "Objectifying" || BODattr[i].attr === "Jealous" || BODattr[i].attr === "Sadistic") {
                DC3 = DC3 + 1;
                if (DC3 > 3) {
                    DC3 = 3
                }

            }

        }

        if (n !== 0) {
            bodDisruptionPlots.push("Seduced")
        }

        if (m !== 0) {
            bodDisruptionPlots.push("Tempted by wealth")
        }

        if (DD2 !== 0) {
            bodDisruptionPlots.push("Tempted by authority")
        }

        if (DD3 !== 0) {
            bodDisruptionPlots.push("Get emotional support")
        }

        if (DC1 !== 0) {
            bodCrisisPlots.push("Fear of powerlessness")
        }

        if (DC2 === 0) {
            bodCrisisPlots.push("Fear of poverty")
        }

        if (DC3 !== 0) {
            bodCrisisPlots.push("Fear of being cheated by BOD")
        }
    }
    first = false;
}


function result() {

    for (var i = 0; i < BOGattr.length; i++) {
        if (BOGattr[i].category === "Authority") {
            string1 = string1 + BOGattr[i].attr + ", ";
        }
        if (BOGattr[i].category === "Potency") {
            string2 = string2 + BOGattr[i].attr + ", ";
        }
        if (BOGattr[i].category === "Patriarchal") {
            string3 = string3 + BOGattr[i].attr + ", ";
        }
        if (BOGattr[i].category === "Attachment") {
            string4 = string4 + BOGattr[i].attr + ", ";
        }

    }

    string1 = string1.substring(0, string1.length - 2);
    string2 = string2.substring(0, string2.length - 2);
    string3 = string3.substring(0, string3.length - 2);
    string4 = string4.substring(0, string4.length - 2);

    $("#BOGcha1").find("p").html('<b>Authority: </b>' + string1);
    $("#BOGcha2").find("p").html('<b>Potency: </b>' + string2);
    $("#BOGcha3").find("p").html('<b>Patriarchal: </b>' + string3);
    $("#BOGcha4").find("p").html('<b>Attachment: </b>' + string4);

    string1 = "";
    string2 = "";
    string3 = "";
    string4 = "";

    for (var j = 0; j < BODattr.length; j++) {
        if (BODattr[j].category === "Authority") {
            string1 = string1 + BODattr[j].attr + ", ";
        }
        if (BODattr[j].category === "Potency") {
            string2 = string2 + BODattr[j].attr + ", ";
        }
        if (BODattr[j].category === "Patriarchal") {
            string3 = string3 + BODattr[j].attr + ", ";
        }
        if (BODattr[j].category === "Attachment") {
            string4 = string4 + BODattr[j].attr + ", ";
        }

    }

    string1 = string1.substring(0, string1.length - 2);
    string2 = string2.substring(0, string2.length - 2);
    string3 = string3.substring(0, string3.length - 2);
    string4 = string4.substring(0, string4.length - 2);

    $("#BODcha1").find("p").html('<b>Authority: </b>' + string1);
    $("#BODcha2").find("p").html('<b>Potency: </b>' + string2);
    $("#BODcha3").find("p").html('<b>Patriarchal: </b>' + string3);
    $("#BODcha4").find("p").html('<b>Attachment: </b>' + string4);

    $("#BOGResult1").find("p").text(bogOpening.plot)
    $("#BOGResult2").find("p").text(bogDisruption.plot)
    $("#BOGResult3").find("p").text(bogCrisis.plot)
    $("#BOGResult4").find("p").text(bogChoice.plot)

    $("#BODResult1").find("p").text(bodOpening.plot)
    $("#BODResult2").find("p").text(bodDisruption.plot)
    $("#BODResult3").find("p").text(bodCrisis.plot)
    $("#BODResult4").find("p").text(bodChoice.plot)
    $("#endResult").find("p").text(consequence.plot)
}
