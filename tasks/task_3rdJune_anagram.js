let str1 = "stop"
let str2 = "spoTS"
let k = 0

if (str1.length === str2.length) {

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++)
            if (str1.charAt(i) == str2.charAt(j))
                k += 1
    }
    if (k == 3)
        console.log(`${str1} and ${str2} are anagrams`)
    else
        console.log(`${str1} and ${str2} are not anagrams`)
}
else
    console.log(`${str1} and ${str2} are not anagrams`)