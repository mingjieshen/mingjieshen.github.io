package com.js.aisino.repository.mapper;

import com.js.aisino.repository.entity.Gb1201;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Gb1201Mapper {
    int deleteByPrimaryKey(Integer num);

    int insert(Gb1201 record);

    int insertSelective(Gb1201 record);

    Gb1201 selectByPrimaryKey(Integer num);

    int updateByPrimaryKeySelective(Gb1201 record);

    int updateByPrimaryKey(Gb1201 record);

    List<Gb1201> selectAll();

}