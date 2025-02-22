package az.developia.comp.shop.emil.bagirov.repository;


import org.springframework.data.jpa.repository.JpaRepository;



import az.developia.comp.shop.emil.bagirov.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {




	UserEntity findByUsername(String sellerUsername);

	

	
	
}
