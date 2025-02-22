package az.developia.comp.shop.emil.bagirov.repository;

import az.developia.comp.shop.emil.bagirov.model.Computer;

import az.developia.comp.shop.emil.bagirov.model.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
	List<Computer> findBySeller(UserEntity seller);

}