// 1. Function kilometerToMeter // Convert Kilometer to meter and return meter
// 2. budgetCalculator // take 3 parameter, watch_price = 50, phone_price = 100, laptop_price = 500
// 3. hotelCost  // 100
// 4. megaFriend //return largest name


//convert kemometer to meter
function kilometerToMeter(length){
    var meter = 1000;
    if(length < 0 ){
        return 'length does not  support    negative vaules';
    }else{
        return length * meter; 
    }
}
console.log(kilometerToMeter(20));

//budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Quantity does not  support    negative vaules';
    }else{
        var totalWatchPrice = watch * watchPrice;
        var totalPhonePrice = phone * phonePrice;
        var totalLaptopPrice = laptop * laptopPrice;
    }
    var sum = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return sum;
}
console.log(budgetCalculator(1, 2, 2));

//hotelCost first 10 days= 100, next 11 to 20 days = 80, and next 21 to unlimited = 50 return total cost
function hotelCost(days){
    var totalAmount = 0
    if( days < 0 ){
        return 'days does not  support    negative vaules';
    }else{
        if(days <= 10){
            totalAmount = days * 100;
        }else if( days > 10 && days <= 20){
            var firstTenDaysAmount  = 10 * 100;
            var secondTenDays = days - 10;
            var secondTenDaysAmount = secondTenDays * 80;
            totalAmount = firstTenDaysAmount + secondTenDaysAmount;
        }else{
            var firstTenDaysAmount  = 10 * 100;
            var secondTenDaysAmount = 10 * 80;
            var thirdTenDays = days - 20;
            var thirdTenDaysAmount = thirdTenDays * 50;
            totalAmount = firstTenDaysAmount + secondTenDaysAmount + thirdTenDaysAmount;
        }
    }
    return totalAmount;
}
console.log(hotelCost(21));


//megaFriend take friend array find the largest friend name from this array
function megaFriend(friends){
    var sorted = friends.sort((a, b) => b.length - a.length);
    return sorted[0];
}
var frineds = ['asif', 'ripon', 'tayeef'];
console.log(megaFriend(frineds));