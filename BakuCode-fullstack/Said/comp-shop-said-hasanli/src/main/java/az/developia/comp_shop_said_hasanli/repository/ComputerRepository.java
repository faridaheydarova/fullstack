package az.developia.comp_shop_said_hasanli.repository;

import az.developia.comp_shop_said_hasanli.entity.Computer;
import az.developia.comp_shop_said_hasanli.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
	List<Computer> findBySeller(UserEntity seller);

}