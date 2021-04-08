package com.js.aisino.repository;

import com.js.aisino.repository.entity.Gb1201;

import java.util.List;

/**
 * @Author Nicolas
 * @create 2020/11/13 0013 下午 1:28
 */
public interface IGb1201Service {
    int insertSelective(Gb1201 record);

    int updateByPrimaryKeySelective(Gb1201 record);

    List<Gb1201> selectAll();

}
