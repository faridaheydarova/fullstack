package az.developia.comp_shop_Kanan_Alizade.repository;


import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.comp_shop_Kanan_Alizade.model.ComputerEntity;
import az.developia.comp_shop_Kanan_Alizade.model.UserEntity;


public interface CompRepository extends JpaRepository<ComputerEntity, Long>{

	List<ComputerEntity> findBySeller(UserEntity seller);



}
