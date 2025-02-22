package az.developia.comp_shop_nurlan_zamanli.repository;


import az.developia.comp_shop_nurlan_zamanli.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
