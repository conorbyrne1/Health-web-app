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
            = `1. Total cases: ${totalCount - 1}`;
        document.getElementById("attack").innerHTML
            = `2. Those who had Heart Attacks/Disease: ${attackCount} 
            (${Math.trunc((attackCount / totalCount * 100) * 100) / 100}%)`;
        document.getElementById("noAttack").innerHTML
            = `3. Those who did not have Heart Attacks/Disease: ${totalCount - attackCount} 
            (${Math.trunc(((totalCount - attackCount) / totalCount * 100) * 100) / 100}%)`;
        document.getElementById("genderSplit").innerHTML
            = `4. Male | Female Counts: ${maleCount} | ${totalCount - maleCount}`;
        document.getElementById("collegeCount").innerHTML
            = `5. Percentage of people who had 4 or more years of college: 
            ${Math.trunc((collegeCount / totalCount * 100) * 100) / 100}% (${collegeCount})`;
        document.getElementById("active").innerHTML
            = `6. Percentage of people who have physical activity in their day-to-day life:
            ${Math.trunc((activeCount / totalCount * 100) * 100) / 100}% (${activeCount})`;
        document.getElementById("lowerIncome").innerHTML
            = `7. Percentage of people who have a lower income:
            ${Math.trunc((lowIncome / totalCount * 100) * 100) / 100}% (${lowIncome} people)`;
        document.getElementById("higherIncome").innerHTML
            = `8. Percentage of people who have a higher income:
            ${Math.trunc(((totalCount - lowIncome) / totalCount * 100) * 100) / 100}% (${totalCount - lowIncome} people)`;
        document.getElementById("cholesterol").innerHTML
            = `9. Percentage of people who have High Cholesterol:
            ${Math.trunc(((highCholesterolCount) / totalCount * 100) * 100) / 100}% (${highCholesterolCount} people)`;
        document.getElementById("bloodPressure").innerHTML
            = `10. Percentage of people who have High Blood Pressure:
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