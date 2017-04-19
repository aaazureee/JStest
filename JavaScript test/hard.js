function almostIncreasingSequence(sequence) {
    var max = sequence[0];
    var firstDelete = false;
    var start = 1;
    if (sequence[0] > sequence[1]) {
        max = sequence[1];
        firstDelete = true;
        start = 2;
    } else {
        start = 1;
    }

    for (var i = start; i < sequence.length; i++) {
        if (max < sequence[i]) {
            max = sequence[i];
        } else {
            if (!firstDelete) {
                firstDelete = true;
            } else {
                return false;
            }
        }
    }
    return true;
}
