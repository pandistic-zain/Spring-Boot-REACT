package org.pandistic.zain.em_project.DaoLayer.Repository;

import java.util.List;

// import org.pandistic.zain.em_project.Controller.Employees;
import org.pandistic.zain.em_project.DaoLayer.Entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    @Query("SELECT e FROM EmployeeEntity e WHERE e.name LIKE %:name%")
    List<EmployeeEntity> findByNameContaining(@Param("name") String name);
}
