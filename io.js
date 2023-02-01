const fs = require("fs");

fs.writeFileSync(
    "sync.txt",
    "This is the testing of writeFileSync and second test!!!"
);

fs.WriteStream("text.txt");

fs.writeFile("text.txt", "This is the testing TEXT", () => {
    console.log("This is in the console log log log!!!!!!!");
});

// //priestley's paradox indicates that the more we elavorate our mean of
// communications, the less we actually communicates.Do you agree or disagree it?
// why?
