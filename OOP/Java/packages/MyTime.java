package Java.packages;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.MonthDay;
import java.time.Year;

public class MyTime {
    public static void main(String[] args) {
        System.out.println(Clock.systemDefaultZone().instant());
        System.out.println(Duration.ofSeconds(60));
        System.out.println(LocalDateTime.now());
        System.out.println(LocalTime.now());
        System.out.println(LocalDate.now());
        System.out.println(MonthDay.now());
        System.out.println(Year.now());

        Instant ins = Instant.parse("2017-02-03T10:37:30.00Z");
        Instant ins2 = ins.minus(Duration.ofDays(364));
        Instant ins3 = ins.plus(Duration.ofDays(364));
        System.out.println(ins);
        System.out.println(ins2);
        System.out.println(ins3);


        // Boolean flag = Instant.now() == Clock.systemDefaultZone().instant();
        // System.out.println(flag);
    }
}
