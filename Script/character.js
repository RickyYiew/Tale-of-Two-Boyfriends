var authorityAll = [],
    authorityPositive = [],
    authorityNegative = [],
    potencyAll = [],
    potencyPositive = [],
    potencyNegative = [],
    patriarchalAll = [],
    patriarchalPositive = [],
    patriarchalNegative = [],
     attachmentAll = [],
    attachmentPositive = [],
    attachmentNegative = [];
var authorityP = 3,
    authorityN = 3,
    potencyP = 3,
    potencyN = 3,
    patriarchalP = 3,
    patriarchalN = 3,
    attachmentP = 3,
    attachmentN = 3;
var authorityStatus = false,
    potencyStatus = false,
    patriarchalStatus = false,
    attachmentStatus = false;
var BOGattr = [],
    BODattr = [];


$(document).ready(function () {
    // ------- Authority -------
    var P11 = {
        button: $("#P11"),
        bf: "BOG",
        selected: false,
        attr: "Communitarian",
        category: "Authority"
    }
    var P12 = {
        button: $("#P12"),
        bf: "BOG",
        selected: false,
        attr: "Rational",
        category: "Authority"
    }
    var P13 = {
        button: $("#P13"),
        bf: "BOG",
        selected: false,
        attr: "Legal",
        category: "Authority"
    }
    var P14 = {
        button: $("#P14"),
        bf: "BOG",
        selected: false,
        attr: "Physical",
        category: "Authority"
    }
    var P15 = {
        button: $("#P15"),
        bf: "BOG",
        selected: false,
        attr: "Financial",
        category: "Authority"
    }
    var N11 = {
        button: $("#N11"),
        bf: "BOG",
        selected: false,
        attr: "Manipulative",
        category: "Authority"
    }
    var N12 = {
        button: $("#N12"),
        bf: "BOG",
        selected: false,
        attr: "Rule-based",
        category: "Authority"
    }
    var N13 = {
        button: $("#N13"),
        bf: "BOG",
        selected: false,
        attr: "Conformist",
        category: "Authority"
    }
    var N14 = {
        button: $("#N14"),
        bf: "BOG",
        selected: false,
        attr: "Dictatorial",
        category: "Authority"
    }
    var N15 = {
        button: $("#N15"),
        bf: "BOG",
        selected: false,
        attr: "Menacing",
        category: "Authority"
    }

    var P16 = {
        button: $("#P16"),
        bf: "BOD",
        selected: false,
        attr: "Communitarian",
        category: "Authority"
    }
    var P17 = {
        button: $("#P17"),
        bf: "BOD",
        selected: false,
        attr: "Rational",
        category: "Authority"
    }
    var P18 = {
        button: $("#P18"),
        bf: "BOD",
        selected: false,
        attr: "Legal",
        category: "Authority"
    }
    var P19 = {
        button: $("#P19"),
        bf: "BOD",
        selected: false,
        attr: "Physical",
        category: "Authority"
    }
    var P110 = {
        button: $("#P110"),
        bf: "BOD",
        selected: false,
        attr: "Financial",
        category: "Authority"
    }
    var N16 = {
        button: $("#N16"),
        bf: "BOD",
        selected: false,
        attr: "Manipulative",
        category: "Authority"
    }
    var N17 = {
        button: $("#N17"),
        bf: "BOD",
        selected: false,
        attr: "Rule-based",
        category: "Authority"
    }
    var N18 = {
        button: $("#N18"),
        bf: "BOD",
        selected: false,
        attr: "Conformist",
        category: "Authority"
    }
    var N19 = {
        button: $("#N19"),
        bf: "BOD",
        selected: false,
        attr: "Dictatorial",
        category: "Authority"
    }
    var N110 = {
        button: $("#N110"),
        bf: "BOD",
        selected: false,
        attr: "Menacing",
        category: "Authority"
    }

    authorityPositive.push(P11, P12, P13, P14, P15, P16, P17, P18, P19, P110);

    authorityNegative.push(N11, N12, N13, N14, N15, N16, N17, N18, N19, N110);

    authorityAll = authorityPositive.concat(authorityNegative);

    for (var i = 0; i < 10; i++) {
        authorityPositive[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (authorityPositive[k].selected === true) {
                $(this).removeClass("checkedPositive");
                $(this).addClass("attPositive");
                authorityPositive[k].selected = false;
                authorityP = authorityP + 1;
                
            } else {
                $(this).removeClass("attPositive");
                $(this).addClass("checkedPositive");
                authorityPositive[k].selected = true;
                authorityP = authorityP - 1;
            }
            if (authorityP === 0) {
                for (var j = 0; j < 10; j++) {
                    if (authorityPositive[j].selected === false) {
                        authorityPositive[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (authorityPositive[j].selected === false) {
                        authorityPositive[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();

        })

        authorityNegative[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (authorityNegative[k].selected === true) {
                $(this).removeClass("checkedNegative");
                $(this).addClass("attNegative");
                authorityNegative[k].selected = false;
                authorityN = authorityN + 1;
               
            } else {
                $(this).removeClass("attNegative");
                $(this).addClass("checkedNegative");
                authorityNegative[k].selected = true;
                authorityN = authorityN - 1;
            }
            if (authorityN === 0) {
                for (var j = 0; j < 10; j++) {
                    if (authorityNegative[j].selected === false) {
                        authorityNegative[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (authorityNegative[j].selected === false) {
                        authorityNegative[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

    }

    // ------- Potency -------

    var P21 = {
        button: $("#P21"),
        bf: "BOG",
        selected: false,
        attr: "Sexuality",
        category: "Potency"
    }
    var P22 = {
        button: $("#P22"),
        bf: "BOG",
        selected: false,
        attr: "Knowledge",
        category: "Potency"
    }
    var P23 = {
        button: $("#P23"),
        bf: "BOG",
        selected: false,
        attr: "Legal System",
        category: "Potency"
    }
    var P24 = {
        button: $("#P24"),
        bf: "BOG",
        selected: false,
        attr: "Fighting",
        category: "Potency"
    }
    var P25 = {
        button: $("#P25"),
        bf: "BOG",
        selected: false,
        attr: "Wealth",
        category: "Potency"
    }
    var N21 = {
        button: $("#N21"),
        bf: "BOG",
        selected: false,
        attr: "Impotent",
        category: "Potency"
    }
    var N22 = {
        button: $("#N22"),
        bf: "BOG",
        selected: false,
        attr: "Withholding",
        category: "Potency"
    }
    var N23 = {
        button: $("#N23"),
        bf: "BOG",
        selected: false,
        attr: "Controlling",
        category: "Potency"
    }
    var N24 = {
        button: $("#N24"),
        bf: "BOG",
        selected: false,
        attr: "Despotic",
        category: "Potency"
    }
    var N25 = {
        button: $("#N25"),
        bf: "BOG",
        selected: false,
        attr: "Violating",
        category: "Potency"
    }

    var P26 = {
        button: $("#P26"),
        bf: "BOD",
        selected: false,
        attr: "Sexuality",
        category: "Potency"
    }
    var P27 = {
        button: $("#P27"),
        bf: "BOD",
        selected: false,
        attr: "Knowledge",
        category: "Potency"
    }
    var P28 = {
        button: $("#P28"),
        bf: "BOD",
        selected: false,
        attr: "Legal System",
        category: "Potency"
    }
    var P29 = {
        button: $("#P29"),
        bf: "BOD",
        selected: false,
        attr: "Fighting",
        category: "Potency"
    }
    var P210 = {
        button: $("#P210"),
        bf: "BOD",
        selected: false,
        attr: "Wealth",
        category: "Potency"
    }
    var N26 = {
        button: $("#N26"),
        bf: "BOD",
        selected: false,
        attr: "Impotent",
        category: "Potency"
    }
    var N27 = {
        button: $("#N27"),
        bf: "BOD",
        selected: false,
        attr: "Withholding",
        category: "Potency"
    }
    var N28 = {
        button: $("#N28"),
        bf: "BOD",
        selected: false,
        attr: "Controlling",
        category: "Potency"
    }
    var N29 = {
        button: $("#N29"),
        bf: "BOD",
        selected: false,
        attr: "Despotic",
        category: "Potency"
    }
    var N210 = {
        button: $("#N210"),
        bf: "BOD",
        selected: false,
        attr: "Violating",
        category: "Potency"
    }

    potencyPositive.push(P21, P22, P23, P24, P25, P26, P27, P28, P29, P210);

    potencyNegative.push(N21, N22, N23, N24, N25, N26, N27, N28, N29, N210);
    
    potencyAll = potencyPositive.concat(potencyNegative);


    for (var i = 0; i < 10; i++) {
        potencyPositive[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (potencyPositive[k].selected === true) {
                $(this).removeClass("checkedPositive");
                $(this).addClass("attPositive");
                potencyPositive[k].selected = false;
                potencyP = potencyP + 1;

            } else {
                $(this).removeClass("attPositive");
                $(this).addClass("checkedPositive");
                potencyPositive[k].selected = true;
                potencyP = potencyP - 1;
            }
            if (potencyP === 0) {
                for (var j = 0; j < 10; j++) {
                    if (potencyPositive[j].selected === false) {
                        potencyPositive[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (potencyPositive[j].selected === false) {
                        potencyPositive[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

        potencyNegative[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (potencyNegative[k].selected === true) {
                $(this).removeClass("checkedNegative");
                $(this).addClass("attNegative");
                potencyNegative[k].selected = false;
                potencyN = potencyN + 1;

            } else {
                $(this).removeClass("attNegative");
                $(this).addClass("checkedNegative");
                potencyNegative[k].selected = true;
                potencyN = potencyN - 1;
            }
            if (potencyN === 0) {
                for (var j = 0; j < 10; j++) {
                    if (potencyNegative[j].selected === false) {
                        potencyNegative[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (potencyNegative[j].selected === false) {
                        potencyNegative[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

    }

    // ------- Patriarchal -------

    var P31 = {
        button: $("#P31"),
        bf: "BOG",
        selected: false,
        attr: "Pacifist",
        category: "Patriarchal"
    }
    var P32 = {
        button: $("#P32"),
        bf: "BOG",
        selected: false,
        attr: "Egalitarian",
        category: "Patriarchal"
    }
    var P33 = {
        button: $("#P33"),
        bf: "BOG",
        selected: false,
        attr: "Righteous",
        category: "Patriarchal"
    }
    var P34 = {
        button: $("#P34"),
        bf: "BOG",
        selected: false,
        attr: "Gallant",
        category: "Patriarchal"
    }
    var P35 = {
        button: $("#P35"),
        bf: "BOG",
        selected: false,
        attr: "Sheltering",
        category: "Patriarchal"
    }
    var N31 = {
        button: $("#N31"),
        bf: "BOG",
        selected: false,
        attr: "Exploitative",
        category: "Patriarchal"
    }
    var N32 = {
        button: $("#N32"),
        bf: "BOG",
        selected: false,
        attr: "Snobbish",
        category: "Patriarchal"
    }
    var N33 = {
        button: $("#N33"),
        bf: "BOG",
        selected: false,
        attr: "Unfaithful",
        category: "Patriarchal"
    }
    var N34 = {
        button: $("#N34"),
        bf: "BOG",
        selected: false,
        attr: "Abusive",
        category: "Patriarchal"
    }
    var N35 = {
        button: $("#N35"),
        bf: "BOG",
        selected: false,
        attr: "Tyrannical",
        category: "Patriarchal"
    }

    var P36 = {
        button: $("#P36"),
        bf: "BOD",
        selected: false,
        attr: "Pacifist",
        category: "Patriarchal"
    }
    var P37 = {
        button: $("#P37"),
        bf: "BOD",
        selected: false,
        attr: "Egalitarian",
        category: "Patriarchal"
    }
    var P38 = {
        button: $("#P38"),
        bf: "BOD",
        selected: false,
        attr: "Righteous",
        category: "Patriarchal"
    }
    var P39 = {
        button: $("#P39"),
        bf: "BOD",
        selected: false,
        attr: "Gallant",
        category: "Patriarchal"
    }
    var P310 = {
        button: $("#P310"),
        bf: "BOD",
        selected: false,
        attr: "Sheltering",
        category: "Patriarchal"
    }
    var N36 = {
        button: $("#N36"),
        bf: "BOD",
        selected: false,
        attr: "Exploitative",
        category: "Patriarchal"
    }
    var N37 = {
        button: $("#N37"),
        bf: "BOD",
        selected: false,
        attr: "Snobbish",
        category: "Patriarchal"
    }
    var N38 = {
        button: $("#N38"),
        bf: "BOD",
        selected: false,
        attr: "Unfaithful",
        category: "Patriarchal"
    }
    var N39 = {
        button: $("#N39"),
        bf: "BOD",
        selected: false,
        attr: "Abusive",
        category: "Patriarchal"
    }
    var N310 = {
        button: $("#N310"),
        bf: "BOD",
        selected: false,
        attr: "Tyrannical",
        category: "Patriarchal"
    }

    patriarchalPositive.push(P31, P32, P33, P34, P35, P36, P37, P38, P39, P310);

    patriarchalNegative.push(N31, N32, N33, N34, N35, N36, N37, N38, N39, N310);

    patriarchalAll = patriarchalPositive.concat(patriarchalNegative);

    for (var i = 0; i < 10; i++) {
        patriarchalPositive[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (patriarchalPositive[k].selected === true) {
                $(this).removeClass("checkedPositive");
                $(this).addClass("attPositive");
                patriarchalPositive[k].selected = false;
                patriarchalP = patriarchalP + 1;

            } else {
                $(this).removeClass("attPositive");
                $(this).addClass("checkedPositive");
               patriarchalPositive[k].selected = true;
                patriarchalP = patriarchalP - 1;
            }
            if (patriarchalP === 0) {
                for (var j = 0; j < 10; j++) {
                    if (patriarchalPositive[j].selected === false) {
                        patriarchalPositive[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (patriarchalPositive[j].selected === false) {
                        patriarchalPositive[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

        patriarchalNegative[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (patriarchalNegative[k].selected === true) {
                $(this).removeClass("checkedNegative");
                $(this).addClass("attNegative");
                patriarchalNegative[k].selected = false;
                patriarchalN = patriarchalN + 1;

            } else {
                $(this).removeClass("attNegative");
                $(this).addClass("checkedNegative");
                patriarchalNegative[k].selected = true;
                patriarchalN = patriarchalN - 1;
            }
            if (patriarchalN === 0) {
                for (var j = 0; j < 10; j++) {
                    if (patriarchalNegative[j].selected === false) {
                        patriarchalNegative[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (patriarchalNegative[j].selected === false) {
                        patriarchalNegative[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

    }

      // ------- Attachment -------

    var P41 = {
        button: $("#P41"),
        bf: "BOG",
        selected: false,
        attr: "Supportive",
        category: "Attachment"
    }
    var P42 = {
        button: $("#P42"),
        bf: "BOG",
        selected: false,
        attr: "Encouraging",
        category: "Attachment"
    }
    var P43 = {
        button: $("#P43"),
        bf: "BOG",
        selected: false,
        attr: "Friendly",
        category: "Attachment"
    }
    var P44 = {
        button: $("#P44"),
        bf: "BOG",
        selected: false,
        attr: "Amorous",
        category: "Attachment"
    }
    var P45 = {
        button: $("#P45"),
        bf: "BOG",
        selected: false,
        attr: "Indulgent",
        category: "Attachment"
    }
    var N41 = {
        button: $("#N41"),
        bf: "BOG",
        selected: false,
        attr: "Cloying",
        category: "Attachment"
    }
    var N42 = {
        button: $("#N42"),
        bf: "BOG",
        selected: false,
        attr: "Cool",
        category: "Attachment"
    }
    var N43 = {
        button: $("#N43"),
        bf: "BOG",
        selected: false,
        attr: "Objectifying",
        category: "Attachment"
    }
    var N44 = {
        button: $("#N44"),
        bf: "BOG",
        selected: false,
        attr: "Jealous",
        category: "Attachment"
    }
    var N45 = {
        button: $("#N45"),
        bf: "BOG",
        selected: false,
        attr: "Sadistic",
        category: "Attachment"
    }

    var P46 = {
        button: $("#P46"),
        bf: "BOD",
        selected: false,
        attr: "Supportive",
        category: "Attachment"
    }
    var P47 = {
        button: $("#P47"),
        bf: "BOD",
        selected: false,
        attr: "Encouraging",
        category: "Attachment"
    }
    var P48 = {
        button: $("#P48"),
        bf: "BOD",
        selected: false,
        attr: "Friendly",
        category: "Attachment"
    }
    var P49 = {
        button: $("#P49"),
        bf: "BOD",
        selected: false,
        attr: "Amorous",
        category: "Attachment"
    }
    var P410 = {
        button: $("#P410"),
        bf: "BOD",
        selected: false,
        attr: "Indulgent",
        category: "Attachment"
    }
    var N46 = {
        button: $("#N46"),
        bf: "BOD",
        selected: false,
        attr: "Cloying",
        category: "Attachment"
    }
    var N47 = {
        button: $("#N47"),
        bf: "BOD",
        selected: false,
        attr: "Cool",
        category: "Attachment"
    }
    var N48 = {
        button: $("#N48"),
        bf: "BOD",
        selected: false,
        attr: "Objectifying",
        category: "Attachment"
    }
    var N49 = {
        button: $("#N49"),
        bf: "BOD",
        selected: false,
        attr: "Jealous",
        category: "Attachment"
    }
    var N410 = {
        button: $("#N410"),
        bf: "BOD",
        selected: false,
        attr: "Sadistic",
        category: "Attachment"
    }

    attachmentPositive.push(P41, P42, P43, P44, P45, P46, P47, P48, P49, P410);

    attachmentNegative.push(N41, N42, N43, N44, N45, N46, N47, N48, N49, N410);

   attachmentAll = attachmentPositive.concat(attachmentNegative);

    for (var i = 0; i < 10; i++) {
        attachmentPositive[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (attachmentPositive[k].selected === true) {
                $(this).removeClass("checkedPositive");
                $(this).addClass("attPositive");
               attachmentPositive[k].selected = false;
                attachmentP = attachmentP + 1;

            } else {
                $(this).removeClass("attPositive");
                $(this).addClass("checkedPositive");
               attachmentPositive[k].selected = true;
                attachmentP = attachmentP - 1;
            }
            if (attachmentP === 0) {
                for (var j = 0; j < 10; j++) {
                    if (attachmentPositive[j].selected === false) {
                        attachmentPositive[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (attachmentPositive[j].selected === false) {
                        attachmentPositive[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

        attachmentNegative[i].button.click(function () {
            var k = Number(this.id.substring(2));
            k = k - 1;
            if (attachmentNegative[k].selected === true) {
                $(this).removeClass("checkedNegative");
                $(this).addClass("attNegative");
                attachmentNegative[k].selected = false;
                attachmentN = attachmentN + 1;

            } else {
                $(this).removeClass("attNegative");
                $(this).addClass("checkedNegative");
                attachmentNegative[k].selected = true;
                attachmentN = attachmentN - 1;
            }
            if (attachmentN === 0) {
                for (var j = 0; j < 10; j++) {
                    if (attachmentNegative[j].selected === false) {
                       attachmentNegative[j].button.attr("disabled", "disabled")
                    }
                }
            } else {
                for (var j = 0; j < 10; j++) {
                    if (attachmentNegative[j].selected === false) {
                        attachmentNegative[j].button.removeAttr("disabled", "disabled")
                    }
                }
            }


            updatePoint();
            checkStatus();


        })

    }
    
        // ------- Turn pages -------

    $("#left1").click(function () {
        $("#authority").addClass("hidden");
        $("#attachment").removeClass("hidden");
    })

    $("#right1").click(function () {
        $("#authority").addClass("hidden");
        $("#potency").removeClass("hidden");
    })

    $("#left2").click(function () {
        $("#potency").addClass("hidden");
        $("#authority").removeClass("hidden");
    })

    $("#right2").click(function () {
        $("#potency").addClass("hidden");
        $("#patriarchal").removeClass("hidden");
    })

    $("#left3").click(function () {
        $("#patriarchal").addClass("hidden");
        $("#potency").removeClass("hidden");
    })

    $("#right3").click(function () {
        $("#patriarchal").addClass("hidden");
        $("#attachment").removeClass("hidden");
    })

    $("#left4").click(function () {
        $("#attachment").addClass("hidden");
        $("#patriarchal").removeClass("hidden");
    })

    $("#right4").click(function () {
        $("#attachment").addClass("hidden");
        $("#authority").removeClass("hidden");
    })
    
     $('.reference').click(function(){
        window.open('./reference.html', '_blank');
    })
    
    $("#create_story").click(function() {
    $("#homepage").addClass("hidden")
    $("#step1").removeClass("hidden")    
    })
    
    $("#step1-next").click(function() {
    for (var i=0; i<20; i++) {
    if (authorityAll[i].selected === true){
    if (authorityAll[i].bf === "BOG") {
    BOGattr.push(authorityAll[i]);
    console.log("BOG: "+authorityAll[i].attr);
    }
    if (authorityAll[i].bf === "BOD") {
    BODattr.push(authorityAll[i]);
    console.log("BOD: "+authorityAll[i].attr);
    }
    }
        
     if (potencyAll[i].selected === true){
    if (potencyAll[i].bf === "BOG") {
    BOGattr.push(potencyAll[i]);
    console.log("BOG: "+potencyAll[i].attr);
    }
    if (potencyAll[i].bf === "BOD") {
    BODattr.push(potencyAll[i]);
    console.log("BOD: "+potencyAll[i].attr);
    }
    }
    
     if (patriarchalAll[i].selected === true){
    if (patriarchalAll[i].bf === "BOG") {
    BOGattr.push(patriarchalAll[i]);
    console.log("BOG: "+patriarchalAll[i].attr);
    }
    if (patriarchalAll[i].bf === "BOD") {
    BODattr.push(patriarchalAll[i]);
    console.log("BOD: "+patriarchalAll[i].attr);
    }
    }
    
      if (attachmentAll[i].selected === true){
    if (attachmentAll[i].bf === "BOG") {
    BOGattr.push(attachmentAll[i]);
    console.log("BOG: "+attachmentAll[i].attr);
    }
    if (attachmentAll[i].bf === "BOD") {
    BODattr.push(attachmentAll[i]);
    console.log("BOD: "+attachmentAll[i].attr);
    }
    }    
        
    }  
    
    $("#step1").addClass("hidden")
    $("#step2").removeClass("hidden")
    
    }
                    
                    
                    )
    
    
})


function updatePoint() {
    $("#1pp").text(authorityP);
    $("#1np").text(authorityN);
    $("#2pp").text(potencyP);
    $("#2np").text(potencyN);
     $("#3pp").text(patriarchalP);
    $("#3np").text(patriarchalN);
     $("#4pp").text(attachmentP);
    $("#4np").text(attachmentN);
}


function checkStatus() {
    var j = 0, k = 0;
    for (var i = 0; i < 20; i++) {
        if (authorityAll[i].bf === "BOG") {
        if (authorityAll[i].selected === false) {
           j = j+1 
        }
            } else {
         if (authorityAll[i].selected === false) {
           k = k+1 
        }   
            }
   }
    if (j === 10 || k === 10) {
    authorityStatus = false;
    } else {
    authorityStatus = true;  
    }
    
j = 0, k = 0;
   for (var i = 0; i < 20; i++) {
        if (potencyAll[i].bf === "BOG") {
        if (potencyAll[i].selected === false) {
           j = j+1 
        }
            } else {
         if (potencyAll[i].selected === false) {
           k = k+1 
        }   
            }
   }
    if (j === 10 || k === 10) {
    potencyStatus = false;
    } else {
    potencyStatus = true;  
    }   
  
    j = 0, k = 0;
   for (var i = 0; i < 20; i++) {
        if (patriarchalAll[i].bf === "BOG") {
        if (patriarchalAll[i].selected === false) {
           j = j+1 
        }
            } else {
         if (patriarchalAll[i].selected === false) {
           k = k+1 
        }   
            }
   }
    if (j === 10 || k === 10) {
    patriarchalStatus = false;
    } else {
     patriarchalStatus = true;  
    } 
    
    j = 0, k = 0;
   for (var i = 0; i < 20; i++) {
        if ( attachmentAll[i].bf === "BOG") {
        if ( attachmentAll[i].selected === false) {
           j = j+1 
        }
            } else {
         if ( attachmentAll[i].selected === false) {
           k = k+1 
        }   
            }
   }
    if (j === 10 || k === 10) {
     attachmentStatus = false;
    } else {
     attachmentStatus = true;  
    } 
    
    if (authorityStatus === true && potencyStatus === true && patriarchalStatus === true && attachmentStatus === true) {
    $("#step1-next").removeAttr("disabled");
    } else {
     $("#step1-next").attr("disabled", "disabled");   
    }
        
        
        
}
