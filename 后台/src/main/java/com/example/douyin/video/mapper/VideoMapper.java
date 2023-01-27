package com.example.douyin.video.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.douyin.video.entity.Video;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author cc
 * @since 2022-09-05
 */
public interface VideoMapper extends BaseMapper<Video> {
    List<Video> querList();
    void delAll();
}
