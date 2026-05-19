let num_1 = 50, num_2 = 20, num_3 = 15;

let max_num = (num_1 > num_2) && (num_1 > num_3) ? num_1 :
    (num_2 > num_3) ? num_2 : num_3;

console.log("The maximum number is: " + max_num);