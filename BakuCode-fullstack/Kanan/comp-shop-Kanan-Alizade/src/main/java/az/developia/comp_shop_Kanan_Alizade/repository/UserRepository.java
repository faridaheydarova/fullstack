package az.developia.comp_shop_Kanan_Alizade.repository;

import az.developia.comp_shop_Kanan_Alizade.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
