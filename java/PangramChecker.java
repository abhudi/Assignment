package java;
import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = sc.nextLine().toLowerCase();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String s) {
        for (char letter = 'a'; letter <= 'z'; letter++) {
            if (s.indexOf(letter) == -1) {
                return false;
            }
        }
        return true;
    }
}
