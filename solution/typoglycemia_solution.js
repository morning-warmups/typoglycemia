var input = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, \n"
+ "the only important thing is that the first and last letter be in the right place. \n"
+ "The rest can be a total mess and you can still read it without a problem.\n"
+ "This is because the human mind does not read every letter by itself, but the word as a whole. \n"
+ "Such a condition is appropriately called Typoglycemia.";



function typoglycemia(input){
    return input.replace(/\b\w+\b/gm,function(word){ //this is a fancy way to split the string into words using 'replace()' with regex \d=Matches a zero-width word boundary \w=alphanumeric character g=global m=multiline

      // console.log(word);

        var w, typo = word;

        while (typo === word && word.length >= 4){
            w = word.split('');
            typo = w.shift() + '';
            while (w.length > 1) typo += w.splice(Math.random() * w.length - 1, 1);
            typo += w.length ? w[0] : '';
        }
        return typo;
    });
}

console.log(typoglycemia(input));
