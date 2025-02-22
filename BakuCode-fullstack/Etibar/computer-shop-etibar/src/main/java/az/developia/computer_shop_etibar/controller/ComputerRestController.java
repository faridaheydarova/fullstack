package az.developia.computer_shop_etibar.controller;

import java.util.ArrayList;
import java.util.List;

import az.developia.computer_shop_etibar.dto.ComputerDTO;
import az.developia.computer_shop_etibar.entity.ComputerEntity;
import az.developia.computer_shop_etibar.entity.UserEntity;
import az.developia.computer_shop_etibar.repository.ComputerRepository;
import az.developia.computer_shop_etibar.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "/computers")
@CrossOrigin(origins = "*")
public class ComputerRestController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private ComputerRepository compRepository;
	@Autowired
	private UserRepository userRepository;

	@GetMapping("/my-computers")
	public ResponseEntity<List<ComputerEntity>> getSellerComputers() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (authentication == null || !authentication.isAuthenticated()
				|| authentication.getPrincipal() instanceof String) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}

		String sellerUsername = authentication.getName();
		UserEntity seller = userRepository.findByUsername(sellerUsername);

		if (seller == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}

		List<ComputerEntity> computers = compRepository.findBySeller(seller);

		return ResponseEntity.ok(computers);
	}

	@PostMapping(path = "/save")
	public ResponseEntity<String> add(@Validated @RequestBody ComputerDTO computer, BindingResult br) {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String sellerUsername = authentication.getName();
		UserEntity seller = userRepository.findByUsername(sellerUsername);
		System.out.println("Aktiv istifadəçi: " + sellerUsername);

		if (seller == null) {
			throw new IllegalStateException("İstifadəçi tapılmadı");
		}

		ComputerEntity entity = new ComputerEntity();
		entity.setBrand(computer.getBrand());
		entity.setPrice(computer.getPrice());
		entity.setDescription(computer.getDescription());
		entity.setModel(computer.getModel());
		entity.setRam(computer.getRam());
		entity.setRom(computer.getRom());
		entity.setSeller(seller);

		entity.setPhoto(computer.getPhoto());

		compRepository.save(entity);
		return ResponseEntity.ok("Komputer uğurla əlavə edildi");
	}

	@GetMapping(path = "/all")
	public List<ComputerDTO> findAll() {
		List<ComputerEntity> list = compRepository.findAll();
		List<ComputerDTO> dtos = new ArrayList<>();

		for (ComputerEntity entity : list) {
			ComputerDTO dto = new ComputerDTO();
			dto.setId(entity.getId());
			dto.setBrand(entity.getBrand());
			dto.setModel(entity.getModel());
			dto.setPrice(entity.getPrice());
			dto.setDescription(entity.getDescription());
			dto.setPhoto(entity.getPhoto());
			dto.setRam(entity.getRam());
			dto.setRom(entity.getRom());

			dtos.add(dto);
		}

		return dtos;
	}

	@GetMapping(path = "/{id}")
	public ComputerEntity findById(@PathVariable Long id) {
		return compRepository.findById(id).get();
	}

	@PutMapping(path = "/{id}")
	public ResponseEntity<ComputerEntity> update(@PathVariable long id, @RequestBody ComputerEntity computer) {
		ComputerEntity updateComp = compRepository.findById(id).get();
		updateComp.setBrand(computer.getBrand());
		updateComp.setModel(computer.getModel());
		updateComp.setPrice(computer.getPrice());
		updateComp.setDescription(computer.getDescription());
		updateComp.setPhoto(computer.getPhoto());
		updateComp.setRam(computer.getRam());
		updateComp.setRom(computer.getRom());

		compRepository.save(updateComp);
		return ResponseEntity.ok(updateComp);
	}

	@DeleteMapping(path = "/{id}")
	public void deleteCompById(@PathVariable Long id) {
		compRepository.deleteById(id);
	}

}
