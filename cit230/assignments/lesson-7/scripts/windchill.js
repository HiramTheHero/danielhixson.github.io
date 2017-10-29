function windChill() {
    var s = 2;
    var t = 52;

    var f = 35.74 + 0.6215 * t - 35.75 * s.pow(s, 0.16) + 0.4275 * t * s.pow(0.16);
}
