window.addEventListener('load', function(){
    let totalCount = 0;
    let attackCount = 0;
    let maleCount = 0;
    let collegeCount = 0;
    let activeCount = 0;
    let lowIncome = 0;
    let highCholesterolCount = 0;
    let highBpCount = 0;
    Papa.parse("heart_disease_data_clean.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        step: function(row) {
        totalCount = totalCount + 1;
        if(row.data.HeartDiseaseorAttack === 1){
            attackCount++;
        }
        if(row.data.Sex === 1){
            maleCount++;
        }
        if(row.data.Education >= 4){
            collegeCount++;
        }
        if(row.data.PhysActivity === 1){
            activeCount++;
        }
        if(row.data.Income <= 3){
            lowIncome++;
        }
        if(row.data.HighChol === 1){
            highCholesterolCount++;
        }
        if(row.data.HighBP === 1){
            highBpCount++;
        }

    },
        complete: function() {
        document.getElementById("csvSize").innerHTML
            = `<b>Total Case</b>\n${totalCount - 1}`;
        document.getElementById("attack").innerHTML
            = `<b>Those who had Heart Attacks/Disease</b>\n${attackCount} 
            (${Math.trunc((attackCount / totalCount * 100) * 100) / 100}%)`;
        document.getElementById("noAttack").innerHTML
            = `<b>Those who did not have Heart Attacks/Disease</b>\n${totalCount - attackCount} 
            (${Math.trunc(((totalCount - attackCount) / totalCount * 100) * 100) / 100}%)`;
        document.getElementById("genderSplit").innerHTML
            = `<b>Male | Female Counts</b>\n${maleCount} | ${totalCount - maleCount}`;
        document.getElementById("collegeCount").innerHTML
            = `<b>Percentage of people who had 4 or more years of college</b>\n
            ${Math.trunc((collegeCount / totalCount * 100) * 100) / 100}% (${collegeCount})`;
        document.getElementById("active").innerHTML
            = `<b>Percentage of people who have physical activity in their day-to-day life</b>\n
            ${Math.trunc((activeCount / totalCount * 100) * 100) / 100}% (${activeCount})`;
        document.getElementById("lowerIncome").innerHTML
            = `<b>Percentage of people who have a lower income</b>\n
            ${Math.trunc((lowIncome / totalCount * 100) * 100) / 100}% (${lowIncome} people)`;
        document.getElementById("higherIncome").innerHTML
            = `<b>Percentage of people who have a higher income</b>\n
            ${Math.trunc(((totalCount - lowIncome) / totalCount * 100) * 100) / 100}% (${totalCount - lowIncome} people)`;
        document.getElementById("cholesterol").innerHTML
            = `<b>Percentage of people who have High Cholesterol</b>\n
            ${Math.trunc(((highCholesterolCount) / totalCount * 100) * 100) / 100}% (${highCholesterolCount} people)`;
        document.getElementById("bloodPressure").innerHTML
            = `<b>Percentage of people who have High Blood Pressure</b>\n
            ${Math.trunc(((highBpCount) / totalCount * 100) * 100) / 100}% (${highBpCount} people)`;

    }
    });
})
//
// window.addEventListener('load', function(){
//     let attackCount = 0;
//     Papa.parse("heart_disease_data_clean.csv", {
//         download: true,
//         header: true,
//         dynamicTyping: true,
//         complete: function(csvData){
//             csvData.data.forEach((row) => {
//                 if(row.HeartDiseaseorAttack === 1) {
//                     rowCount++;
//                 }
//             });
//             console.log(rowCount);
//             const element = document.getElementById("attack").innerHTML
//                 = `count of heart attacks/ disease: ${rowCount}`;
//         }
//     });
// })