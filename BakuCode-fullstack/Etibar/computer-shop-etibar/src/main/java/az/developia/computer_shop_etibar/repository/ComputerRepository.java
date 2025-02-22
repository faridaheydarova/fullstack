package az.developia.computer_shop_etibar.repository;


import az.developia.computer_shop_etibar.entity.ComputerEntity;
import az.developia.computer_shop_etibar.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<ComputerEntity, Long> {

	List<ComputerEntity> findBySeller(UserEntity seller);



}
