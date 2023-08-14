

/*
 * We want to make a version comparing function. it will take two arguments, version1 and version2 as strings
 * 
 * If Version1 is greater, output 1
 * If Version1 is lesser, output -1
 * If both are equal, output 0
 * 
 * Cases:
 * * "2.1.10", "2.2" Expected output: -1
 * * "2.1.10", "2.1.1" Expect output: 1
 *  "2.1.0.0.0.0.0", "2.1" Expect output: 0
 * "2.1.0.0.0.0.0", "2.1.0.0.0.0.1" Expect output: -1
 * 
 * 
 */

import java.util.ArrayList;

public class VersionCompare {

    public static int compareVersion(String version1, String version2) {
        ArrayList<Character> ver1 = version1.split(".");
        let ver2 = version2.split(".");
    
        if (ver1.length >= ver2.length) {
            for (int i = 1; i <= ver1.length; i++){
                if (ver2[i] == null){
                    ver2[i] = 0;
                }
                if (ver1[i] == ver2[i]) {
                    continue;
                }
                else if (ver1[i] > ver2[i]) {
                    return 1;
                }
                else if (ver1[i] < ver2[i]) {
                    return -1;
                }
            }
            return 0;
        }
    
    
        else if (ver1.length < ver2.length) {
            int loop = 0;
            for (int i = 1; i <= ver2.length; i++){
                if (ver1[i] == null){
                    ver1[i] = 0;
                }
                if (ver2[i] == ver1[i]) {
                    continue;
                }
                else if (ver2[i] > ver1[i]) {
                    return -1;
                }
                else if (ver2[i] < ver1[i]) {
                    return 1;
                }
            }
            return 0;
        }

        System.out.println(compareVersion("2.0.0.0.1", "2"));

    } }



 