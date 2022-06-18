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

    // indexOf
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

// Upper Case
    console.log("UPPER CASE");
    console.log(str1.toUpperCase());

// Lower Case
    console.log("LOWER CASE");
    console.log(str1.toLowerCase());

// ValueOf and ToString
    console.log("VALUE OF");
    let strAsObj = new String("my string object");

    console.log(strAsObj);
    console.log(strAsObj.valueOf());
    console.log(strAsObj.toString());






 