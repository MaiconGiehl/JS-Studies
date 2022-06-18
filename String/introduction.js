/* 
    In this section,
    I'm going to study 
    string methods and properties
*/


// REPLACE
    console.log("REPLACE")
    let str1 = "coolest string ever";
    // str1 = str1.replace("o", "a");

    console.log(str1.replace("o", "a"));
    console.log(str1.replaceAll("o", "a"));

    console.log(str1.replace(/o/, "a")); // same as replaceAll
    // /smth/ == regular expression

    console.log("");


    // IndexOf
    console.log("INDEXOF");
    console.log(str1.indexOf("string"));
    console.log(str1.indexOf("string"));
    console.log(str1.lastIndexOf("string"));
    console.log(str1.lastIndexOf("asdsa"));

    console.log("");

// includes() returns a boolean
    console.log("INCLUDES")
    console.log(str1.includes("string"));
    console.log(str1.includes("string") >= 0);
    console.log(str1.includes("asdasd"));
    console.log(str1.includes("asdasdas") >= 0);

    console.log("");

// Slice and Substring
    console.log("SLICE AND SUBSTRING");
    console.log(str1.slice(2, 5));
    console.log(str1.substring(2, 5));

    console.log(str1.slice(2, 7));
    console.log(str1.substring(2, 7));

    console.log(str1.slice(2, 7));
    console.log(str1.substring(2));

    // Slice understand < 0 values, Substring don't
    console.log(str1.slice(-2));
    console.log(str1.substring(-2));

    // Substring understand even if the first value is higher, Slice don't
    console.log(str1.substring(8, 2));
    console.log(str1.slice(8, 2));

    console.log("");


// Upper Case
    console.log("UPPER CASE");
    console.log(str1.toUpperCase());

    console.log("");

// Lower Case
    console.log("LOWER CASE");
    console.log(str1.toLowerCase());

    console.log("");


// ValueOf and ToString
    console.log("VALUE OF");
    let strAsObj = new String("my string object");

    console.log(strAsObj);
    console.log(strAsObj.valueOf());
    console.log(strAsObj.toString());

    console.log("");


// Trim
    // (removes empty spaces)
    console.log("TRIM")
    // str1 = "               " +  str1 + "          ";
    str1 = `

        test

    `;
    console.log("NORMAL STRING")
    console.log(str1);
    console.log("NORMAL TRIM")
    console.log(str1.trim());
    console.log("TRIM END")
    console.log(str1.trimEnd());
    console.log("TRIM START")
    console.log(str1.trimStart());
    
    console.log("");

// PAD
    console.log("PAD");
    str1 = "0123456789";
    console.log(str1.padStart(20, "*"));
    console.log(str1);

    console.log(str1.padEnd(20, "*"));
    console.log(str1);

    console.log("");

// EXERCISE: PHONE MASK
    console.log("EXERCISE")
    let phone1 = "91234-2345"; // "9****-**45"
    let phone2 = "1234-2345"; // "1***-**45"

    function phoneMask (phoneNumber) {
        let hyphenPos = phoneNumber.indexOf("-");
        let startNum = phoneNumber.slice(0, hyphenPos);
        let finalNum = phoneNumber.slice(hyphenPos + 1);
        let twoLastNumbers = finalNum.slice(-2);
        return `${startNum[0].padEnd(startNum.length, "*")}-${twoLastNumbers.padStart(finalNum.length, "*")}`
    }

    console.log(phoneMask(phone1));
    console.log(phoneMask(phone2));

    console.log("");

// Start and End with
    console.log("STARTWITH and ENDWITH")
    let str2 = "Today was a good day";
    console.log(str2.startsWith("Today"));
    console.log(str2.endsWith("Today"));

    // second parameter: where begin to search
    console.log(str2.startsWith("oday", 1));
    console.log(str2.endsWith("day", 3));

// charAt()
    console.log("CHAR AT")
    let str3 = "abcdefgh";
    console.log(str3.charAt(0));
    console.log(str3.charCodeAt(0));
    console.log(str3.charCodeAt(1));