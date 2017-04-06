function foo() {
    var bar;
    quux = "foo";
    function zip() {
        var quux = "bar";
        bar = true;
    };
    return zip;
}
