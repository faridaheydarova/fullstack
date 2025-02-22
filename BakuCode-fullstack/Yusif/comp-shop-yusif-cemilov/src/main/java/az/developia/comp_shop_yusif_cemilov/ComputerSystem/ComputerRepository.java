package az.developia.comp_shop_yusif_cemilov.ComputerSystem;


import az.developia.comp_shop_yusif_cemilov.UserSystem.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
	List<Computer> findBySeller(UserEntity seller);

}