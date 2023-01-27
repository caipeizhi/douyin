package com.example.douyin.video.controller;


import com.example.douyin.video.entity.Video;
import com.example.douyin.video.mapper.VideoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cc
 * @since 2022-09-05
 */
@RestController
@RequestMapping("/video")
public class VideoController {
    @Autowired
    VideoMapper videoMapper;

    @GetMapping("page")
    public Object page(){
        List<Video> videos = videoMapper.querList();
        Collections.shuffle(videos);
        return videos;
    }

}
