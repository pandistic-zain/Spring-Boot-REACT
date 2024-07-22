package org.pandistic.zain.em_project.Repository;

import org.pandistic.zain.em_project.Entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    // You can add custom query methods here
}
