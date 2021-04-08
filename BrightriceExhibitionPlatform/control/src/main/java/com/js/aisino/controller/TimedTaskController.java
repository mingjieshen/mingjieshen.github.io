package com.js.aisino.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * 定时运行的任务
 * @Author Nicolas
 * @create 2020/11/4 0004 上午 10:10
 */
@PropertySource("classpath:/application.yml")
@Component
public class TimedTaskController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private int count1;

    @Async
    //@PostConstruct/*启动时执行*/
    @Scheduled(cron ="${cron1}")
    public void execute1() throws InterruptedException {
        logger.info(new Date()+"第{}次执行定时任务", ++count1);
    }


}
