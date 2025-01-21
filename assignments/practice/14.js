//Write a JavaScript program to extract the file name (without its extension) from a given set of file names
var files = ['doc.txt', 'docs.pdf', 'image.jpg', 'img.png.jpeg'];
var newarr = files.map(i => {
    parts = i.split('.')
    parts.pop()
    return parts.join('.')
});
console.log(newarr)