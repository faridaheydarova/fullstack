package az.developia.comp_shop_ali_huseynli.repository;


import java.util.List;


import az.developia.comp_shop_ali_huseynli.entity.ComputerEntity;
import az.developia.comp_shop_ali_huseynli.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompRepository extends JpaRepository<ComputerEntity, Long>{

	List<ComputerEntity> findBySeller(UserEntity seller);



}
