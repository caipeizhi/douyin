package com.example.douyin.video.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author cc
 * @since 2022-09-05
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("video")
public class Video implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 视频编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 文字信息
     */
    private String content;

    /**
     * oss存储的路径
     */
    private String url;

    /**
     * 用户昵称信息
     */
    private String userNick;

    /**
     * 用户头像
     */
    private String head;

    /**
     * 点赞数
     */
    private Long heartNum;

    /**
     * 评论数量
     */
    private Long commentNum;

    /**
     * 收藏数量
     */
    private Long collectNum;

    /**
     * 转发数量
     */
    private Long forwardNum;

    /**
     * 发布时间
     */
    private LocalDateTime publishDate;


}
