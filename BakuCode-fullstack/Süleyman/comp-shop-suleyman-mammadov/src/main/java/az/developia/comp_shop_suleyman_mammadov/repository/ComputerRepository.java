package az.developia.comp_shop_suleyman_mammadov.repository;

import az.developia.comp_shop_suleyman_mammadov.entity.Computer;
import az.developia.comp_shop_suleyman_mammadov.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
	List<Computer> findBySeller(UserEntity seller);

}