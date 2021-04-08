package com.js.aisino.controller;

import com.js.aisino.repository.IGb1201Service;
import com.js.aisino.repository.entity.Gb1201;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @Author Nicolas
 * @create 2021/4/6 0006 下午 1:46
 */
@Controller
public class test {
    @Autowired
    public IGb1201Service gb1201Service;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping("test")
    //@ResponseBody
    public String test(Model model){

        List<Gb1201> rs=gb1201Service.selectAll();
        Integer num = rs.get(0).getNum();
        model.addAttribute("num",num);
        logger.info("test");
        return "test.html";
    }

}
