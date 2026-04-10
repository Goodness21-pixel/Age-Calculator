    function calculateAge(){
    const d = parseInt(document.getElementById('day').value);
    const m = parseInt(document.getElementById('month').value)-1;
    const y = parseInt(document.getElementById('year').value);
    const birthDay = new Date(y,m,d);
    const today = new Date();
    if(birthDay > today){
        alert("Invalid birth date");
        return;
    }
    //Age calculation
    let years = today.getFullYear() - y;
    let months = today.getMonth() - m;
    let days = today.getDate() - d;
    if(days < 0){
        months--;
        const prevMonth = new Date(today.getFullYear(),
        today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if(months < 0){
        years--;
        months += 12;
    }
     document.getElementById('ageResult').innerHTML = ` you are <span class="big">${years}</span> years, ${months} months and ${days} days old `;
    
    //Total time lived
    const diff = today - birthDay;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totaWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(diff / (1000 * 60 * 60));

    document.getElementById('totalDays').innerText = totalDays.toLocaleString();
    document.getElementById('totalWeeks').innerText = totaWeeks.toLocaleString();
    document.getElementById('totalHours').innerText = totalHours.toLocaleString();

     //next birthday
     let nextBday = new Date(today.getFullYear(),m,d);
     if(nextBday < today){
         nextBday.setFullYear(today.getFullYear()+1);
     }
     const daysToBday = Math.ceil((nextBday-today)/(1000*60*60*24));
     document.getElementById('nextBirthday').innerText=daysToBday;

     //Weekday born
     const options = {weekday:'long'};
     document.getElementById('weekday').innerText = birthDay.toLocaleString('en-US', options);

     //zodaic signs
     document.getElementById('zodaic').innerText = getZodaic(d,m+1);
}
     function getZodaic (day,month){
        if ((month == 1 && day >= 19) ||
        (month == 2 && day <= 18)) 
        return "Aqarius"; 
        else if ((month == 2 && day >= 19)||
        (month == 3 && day <= 20))
        return "Pisces";
        else if ((month == 3 && day >= 21)||
        (month == 4 && day <= 19))
        return "Aries";
        else if ((month == 4 && day >= 20)||
        (month == 5 && day <= 20))
        return "Taurus";
        else if ((month == 5 && day >= 21)||
        (month == 6 && day <=20))
        return "Gemini";
        else if ((month == 6 && day >= 21)||
        (month == 7 && day <= 22))
        return "Cancer";
        else if ((month == 7 && day >= 23)||
        (month == 8 && day <=22))
        return "Leo";
        else if ((month == 8 && day >= 23)||
        (month == 9 && day <=22))
        return "Virgo";
        else if ((month == 9 && day >= 23)||
        (month == 10 && day >= 22))
        return "Libra";
        else if ((month == 10 && day >= 23)||
        (month == 11 && day <=21))
        return "Scorpio";
        else if ((month == 11 && day >= 22)||
        (month == 12 && day <= 21))
        return "Sagittarius";
        else if ((month == 12 && day >= 22)||
        (month == 1 && day <= 19))
        return "Capricorn";
     }
