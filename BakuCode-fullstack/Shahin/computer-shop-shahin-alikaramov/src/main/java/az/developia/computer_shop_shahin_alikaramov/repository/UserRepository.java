package az.developia.computer_shop_shahin_alikaramov.repository;


import az.developia.computer_shop_shahin_alikaramov.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
