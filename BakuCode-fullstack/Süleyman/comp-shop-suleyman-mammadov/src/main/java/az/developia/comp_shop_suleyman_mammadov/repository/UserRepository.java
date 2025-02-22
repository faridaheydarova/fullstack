package az.developia.comp_shop_suleyman_mammadov.repository;

import az.developia.comp_shop_suleyman_mammadov.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
