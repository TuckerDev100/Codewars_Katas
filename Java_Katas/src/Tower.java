// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"

        //need to get the total number of spaces first
        //then decide which should be blank and which should be asterisk
        //how to determine center???

import java.util.*;

public class Tower {
    public static String[] towerBuilder (int nFloors) {
        int totalSpaces = (2 * nFloors -1);
        StringBuilder str = new StringBuilder();
        
        int center = totalSpaces / 2;
        int upperBound = center + 1;
        int lowerBound = center -1;
        while (nFloors > 0) {
            for (int i = 0; i < totalSpaces; i ++) {
                if (i <= lowerBound || i >= upperBound) {
                    str.append(' ');
                }
                else {
                    str.append('*');
                }

            }    
        str.append('\n');
        upperBound = upperBound + 1;
        lowerBound = lowerBound - 1;
        nFloors --;
        }
        System.out.println(str);
        String temp = str.toString();
        String[] output = temp.split("\n");

        for (String i : output) {
            System.out.println(i);
        }

        return output;
    }
}

            // if (i[center] == i + middleBloom || i == i - middleBloom ){
            //     str.append("*");
            // } else {
            //     str.append(" ");
            // }