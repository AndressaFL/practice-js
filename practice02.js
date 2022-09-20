for (let count = 0; count <= 100; count++) {
    if (count % 2 == 0 && count % 3 == 0) {
        console.log("fooBaz")
    } else if (count % 2 == 0) {
        console.log("foo")
    } else if (count % 3 == 0) {
        console.log("baz")
    } else {
        console.log(count)
    }
}