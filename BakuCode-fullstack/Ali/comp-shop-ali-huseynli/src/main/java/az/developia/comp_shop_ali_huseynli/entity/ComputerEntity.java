package az.developia.comp_shop_ali_huseynli.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "computer")
public class ComputerEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String brand;
	private String model;
	private Long price;
	private String description;
	private String photo;
	private Long ram;
	private Long rom;
	@ManyToOne
	@JoinColumn(name="seller_id")
    private UserEntity seller;


	

	public UserEntity getSeller() {
		return seller;
	}
	public void setSeller(UserEntity seller) {
		this.seller = seller;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public Long getRam() {
		return ram;
	}
	public void setRam(Long ram) {
		this.ram = ram;
	}

	public Long getRom() {
		return rom;
	}
	public void setRom(Long rom) {
		this.rom = rom;
	}

	
	
	

	
}
