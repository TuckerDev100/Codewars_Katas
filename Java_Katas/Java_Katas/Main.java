import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("hello world 3");

        Scanner scan = new Scanner(System.in);
        System.out.println("please enter your name: ");
        String name = scan.nextLine();
        System.out.println("Hello " + name);
        scan.close();
    }
}