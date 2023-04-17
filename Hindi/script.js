var Q1 = sessionStorage.getItem("Q1"), Q1_Value;
var Q1_Values = [ 376.9, 36.5, 32.8, 1150, 0, 4.6 ]
for (let i = 0; i < Q1_Values.length; i++) {
    if(Q1 == i + 1) Q1_Value = Q1_Values[i]
}

var Q2 = sessionStorage.getItem("Q2"), Q2_Value;
var Q2_Values = [ 750, 1200, 1800, 2700, 3600, 5400, 7200, 9000 ]
for (let i = 0; i < Q2_Values.length; i++) {
    if(Q2 == i + 1) Q2_Value = Q2_Values[i]
}

var Q3 = sessionStorage.getItem("Q3"), Q3_Value;
var Q3_Values = [ 1, 2, 3, 4, 5, 6, 8 ]
for (let i = 0; i < Q3_Values.length; i++) {
    if(Q3 == i + 1) Q3_Value = Q3_Values[i]
}

var Q4 = sessionStorage.getItem("Q4"), Q4_Value;
var Q4_Values = [ 3300, 2600, 1700, 1500, 1100 ]
for (let i = 0; i < Q4_Values.length; i++) {
    if(Q4 == i + 1) Q4_Value = Q4_Values[i]
}

var Q5 = sessionStorage.getItem("Q5"), Q5_Value;
var Q5_Values = [ 500, 300, 150, 0 ]
for (let i = 0; i < Q5_Values.length; i++) {
    if(Q5 == i + 1) Q5_Value = Q5_Values[i]
}

var Q6 = sessionStorage.getItem("Q6"), Q6_Value;
var Q6_Values = [ 500, 300, 150, 0 ]
for (let i = 0; i < Q6_Values.length; i++) {
    if(Q6 == i + 1) Q6_Value = Q6_Values[i]
}

var Q7 = sessionStorage.getItem("Q7"), Q7_Value;
var Q7_Values = [ 250, 150, 75, 0 ]
for (let i = 0; i < Q7_Values.length; i++) {
    if(Q7 == i + 1) Q7_Value = Q7_Values[i]
}

var Q8 = sessionStorage.getItem("Q8"), Q8_Value;
var Q8_Values = [ 2500, 1750, 1250, 670, 120 ]
for (let i = 0; i < Q8_Values.length; i++) {
    if(Q8 == i + 1) Q8_Value = Q8_Values[i]
}

var Q9 = sessionStorage.getItem("Q9"), Q9_Value;
var Q9_Values = [ 1600, 1200, 800, 400, 200, 100 ]
for (let i = 0; i < Q9_Values.length; i++) {
    if(Q9 == i + 1) Q9_Value = Q9_Values[i]
}

var Q10 = sessionStorage.getItem("Q10"), Q10_Value;
var Q10_Values = [ 0, 150, 300, 500 ]
for (let i = 0; i < Q10_Values.length; i++) {
    if(Q10 == i + 1) Q10_Value = Q10_Values[i]
}

var Q11 = sessionStorage.getItem("Q11"), Q11_Value;
var Q11_Values = [ 1462.5, 1137.5, 812.5, 487.5, 0, 0 ]
for (let i = 0; i < Q11_Values.length; i++) {
    if(Q11 == i + 1) Q11_Value = Q11_Values[i]
}

var Q12 = sessionStorage.getItem("Q12"), Q12_Value;
var Q12_Values = [ 300, 150, 50, 0, 0 ]
for (let i = 0; i < Q12_Values.length; i++) {
    if(Q12 == i + 1) Q12_Value = Q12_Values[i]
}

var result = (Q1_Value/Q3_Value + Q2_Value/Q3_Value + Q4_Value + Q5_Value + Q6_Value/Q3_Value + Q7_Value/Q3_Value + Q8_Value/Q3_Value + Q9_Value/Q3_Value + Q10_Value/Q3_Value + Q11_Value + Q12_Value) / 1000
sessionStorage.setItem("Result1", result)

console.log("Question 1 Answear: " + Q1_Value)
console.log("Question 2 Answear: " + Q2_Value)
console.log("Question 3 Answear: " + Q3_Value)
console.log("Question 4 Answear: " + Q4_Value)
console.log("Question 5 Answear: " + Q5_Value)
console.log("Question 6 Answear: " + Q6_Value)
console.log("Question 7 Answear: " + Q7_Value)
console.log("Question 8 Answear: " + Q8_Value)
console.log("Question 9 Answear: " + Q9_Value)
console.log("Question 10 Answear: " + Q10_Value)
console.log("Question 11 Answear: " + Q11_Value)
console.log("Question 12 Answear: " + Q12_Value)
console.log("Result:" + result)