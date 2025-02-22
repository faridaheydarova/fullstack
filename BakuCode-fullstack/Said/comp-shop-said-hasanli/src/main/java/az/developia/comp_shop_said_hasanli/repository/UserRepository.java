package az.developia.comp_shop_said_hasanli.repository;

import az.developia.comp_shop_said_hasanli.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
