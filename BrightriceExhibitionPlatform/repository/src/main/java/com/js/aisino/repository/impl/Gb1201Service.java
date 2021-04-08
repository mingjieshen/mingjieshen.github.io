package com.js.aisino.repository.impl;

import com.js.aisino.repository.IGb1201Service;
import com.js.aisino.repository.entity.Gb1201;
import com.js.aisino.repository.mapper.Gb1201Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author Nicolas
 * @create 2020/11/13 0013 下午 1:29
 */
@Service("Gb1201Service")
public class Gb1201Service implements IGb1201Service {
    @Autowired
    private Gb1201Mapper Gb1201Mapper;

    @Override
    public int insertSelective(Gb1201 record) {
        return Gb1201Mapper.insertSelective(record);
    }

    @Override
    public int updateByPrimaryKeySelective(Gb1201 record) {
        return Gb1201Mapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public List<Gb1201> selectAll() {
        return Gb1201Mapper.selectAll();
    }

}
