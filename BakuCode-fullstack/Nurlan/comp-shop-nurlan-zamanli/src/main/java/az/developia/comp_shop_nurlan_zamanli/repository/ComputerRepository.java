package az.developia.comp_shop_nurlan_zamanli.repository;


import az.developia.comp_shop_nurlan_zamanli.entity.Computer;
import az.developia.comp_shop_nurlan_zamanli.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
	List<Computer> findBySeller(UserEntity seller);

}