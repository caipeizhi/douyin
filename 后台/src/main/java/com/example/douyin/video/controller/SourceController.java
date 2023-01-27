package com.example.douyin.video.controller;

import com.example.douyin.video.entity.Video;
import com.example.douyin.video.entity.Source;
import com.example.douyin.video.mapper.VideoMapper;
import com.example.douyin.video.service.impl.MultiVideoSpider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

/**
 * @ClassName SourceController
 * @Description TODO
 * @Author cc
 * @Date 2022/12/9 17:04
 * @Version 1.0
 */
@RestController
@RequestMapping("/source")
public class SourceController {
    @Autowired
    MultiVideoSpider multiVideoSpider;
    @Autowired
    VideoMapper videoMapper;

    @GetMapping("load")
    public Object load() throws IOException {
        multiVideoSpider.setUserUrl("https://www.douyin.com/user/MS4wLjABAAAAlmbxsw4LamCO0oH4Cb_PzMXUF_EkhK4hKa-J6FB8S1iXAsU3vVUJj3SsFvdnnzYV");
        multiVideoSpider.setMaxCount(0);
        videoMapper.delAll();
        List<Source> list = multiVideoSpider.getVideoList("like");
        for (Source source : list) {
            Video video = new Video();
            System.out.println(source);
            video.setUrl(source.getVideoInfo().getVideoUrl());
            videoMapper.insert(video);
        }
        return null;
    }

}
