package az.developia.comp_shop_Kanan_Alizade.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class ConfirmationController {
	


	    @GetMapping("/confirmation")
	    public String showConfirmationForm() {
	        return "confirmation-form"; 
	    }
	}

