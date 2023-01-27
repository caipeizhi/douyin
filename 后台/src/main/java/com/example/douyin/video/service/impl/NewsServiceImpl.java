package com.example.douyin.video.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.douyin.video.entity.News;
import com.example.douyin.video.mapper.NewsMapper;
import com.example.douyin.video.service.INewsService;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cc
 * @since 2022-09-05
 */
@Service
public class NewsServiceImpl extends ServiceImpl<NewsMapper, News> implements INewsService {

}
