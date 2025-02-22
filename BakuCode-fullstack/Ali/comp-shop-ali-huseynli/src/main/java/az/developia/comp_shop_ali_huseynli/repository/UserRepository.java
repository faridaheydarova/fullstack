package az.developia.comp_shop_ali_huseynli.repository;

import az.developia.comp_shop_ali_huseynli.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
