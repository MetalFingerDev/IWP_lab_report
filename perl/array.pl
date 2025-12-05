#!/usr/bin/perl
use strict;
use warnings;

# (a) Create an array with 10 elements
my @arr = (1..10);

# (b) Print the highest index of the array
print "(b) Highest index initially: ", $#arr, "\n";

# (c) Assign beyond the end of the array, to an element at index 20
$arr[20] = 100;

# (d) Save the current highest index in a scalar, and print it
my $prev_size = $#arr;
print "(d) Highest index after assigning index 20: $prev_size\n";

# (e) Set the array size to 5 elements (index 4)
$#arr = 4;

# (f) Print the array with indices
print "(f) Array after resizing to 5 elements:\n";
for my $i (0..$#arr) {
    print "Index $i => $arr[$i]\n";
}

# (g) Set the array size back to the previous size (using the scalar created in (d))
$#arr = $prev_size;

# (h) Print the array with indices
print "(h) Array after restoring size:\n";
for my $i (0..$#arr) {
    my $val = defined $arr[$i] ? $arr[$i] : "undef";
    print "Index $i => $val\n";
}
