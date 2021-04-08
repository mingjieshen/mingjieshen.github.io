package com.js.aisino;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.IOException;

@EnableScheduling // 开启定时任务功能
@MapperScan("com.js.aisino.repository.mapper")
@EnableAutoConfiguration
@SpringBootConfiguration
@ComponentScan
public class BrightriceExhibitionPlatformApplication extends SpringBootServletInitializer {
    @Value("${server.port}")
    private String port;

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
        return application.sources(BrightriceExhibitionPlatformApplication.class);
    }

    //启动服务时自动打开浏览器并访问指定地址
    @EventListener({ApplicationReadyEvent.class})
    void applicationReadyEvent() {
        System.out.println("应用已经准备就绪 ... 启动浏览器");
        String url = "http://localhost:"+port+"/test";
        Runtime runtime = Runtime.getRuntime();
        try {
            runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(BrightriceExhibitionPlatformApplication.class, args);
    }

}
