package az.developia.comp_shop_yusif_cemilov.UserSystem;


import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
