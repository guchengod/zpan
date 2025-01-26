package im.zhaojun.zfile.module.config.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * 系统设置 entity
 *
 * @author zhaojun
 */
@Data
@ApiModel(description = "系统设置")
@TableName("system_config")
public class SystemConfig implements Serializable {

    public static final String DIRECT_LINK_PREFIX_NAME = "directLinkPrefix";

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    @ApiModelProperty(value = "ID, 新增无需填写", example = "1")
    private Integer id;


    @TableField("`name`")
    @ApiModelProperty(value = "系统设置名称", example = "siteName")
    private String name;


    @TableField("`value`")
    @ApiModelProperty(value = "系统设置值", example = "ZFile 演示站")
    private String value;


    @TableField("title")
    @ApiModelProperty(value = "系统设置描述", example = "站点名称")
    private String title;

}