package it.sandeliukai.configs;

import java.time.LocalDate;

public class DateValue<T> {

    private final LocalDate date;

    private final T value;

    public DateValue(LocalDate date, T value) {
        this.date = date;
        this.value = value;
    }

    public LocalDate getDate() {
        return date;
    }

    public T getValue() {
        return value;
    }

}
