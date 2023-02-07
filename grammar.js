console.log(7*7*24*60);

1+1
let myvar = 1;
myvar = 3
myvar = myvar + 1
// let greeting = "Hello"
console.log(myvar)

let a = 9
a = a + 1
a = a * 2
console.log(a)

//  Write JS code that assigns to the 
// variable url a string that is the value 
// of the first URL that appears in a link 
// tag in the string page.

// page = contents of a web page
page ='<div id="top_bin"><div id="top_content" class="width960"><div class="udacity float-left"><a href="http://www.xkcd.com">'
start_link = page.indexOf('<a href=')
console.log(start_link)
start_quote = start_link + 9
console.log(start_quote)
// end_quote = page.indexOf(page.lenght-3)
let link_rest = page.substring(start_quote)
console.log(link_rest)
end_link = page.indexOf(' "> ')
console.log(end_link)
let link_rest2 = link_rest.substring(0, end_link)
console.log(link_rest2)
console.log(page.substring(start_quote, page.lenght-3))











