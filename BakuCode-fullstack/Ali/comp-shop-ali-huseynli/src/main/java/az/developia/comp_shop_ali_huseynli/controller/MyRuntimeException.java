package az.developia.comp_shop_ali_huseynli.controller;

import org.springframework.validation.BindingResult;

public class MyRuntimeException extends Throwable {
    public MyRuntimeException(BindingResult result) {
    }
}