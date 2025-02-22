package az.developia.computer_shop_shahin_alikaramov.repository;


import az.developia.computer_shop_shahin_alikaramov.entity.Computer;
import az.developia.computer_shop_shahin_alikaramov.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
	List<Computer> findBySeller(UserEntity seller);

}