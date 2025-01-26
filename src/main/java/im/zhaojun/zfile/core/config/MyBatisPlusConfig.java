package im.zhaojun.zfile.core.config;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.injector.AbstractMethod;
import com.baomidou.mybatisplus.core.injector.DefaultSqlInjector;
import com.baomidou.mybatisplus.core.injector.ISqlInjector;
import com.baomidou.mybatisplus.core.injector.methods.Insert;
import com.baomidou.mybatisplus.core.injector.methods.UpdateById;
import com.baomidou.mybatisplus.core.metadata.TableInfo;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.mapping.DatabaseIdProvider;
import org.apache.ibatis.mapping.VendorDatabaseIdProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.Properties;
import java.util.List;

/**
 * mybatis-plus 配置类
 *
 * @author zhaojun
 */
@Slf4j
@Configuration
public class MyBatisPlusConfig {

    @Resource
    private DataSource dataSource;
    
    @Value("${spring.datasource.driver-class-name}")
    private String datasourceDriveClassName;
    
    @Value("${spring.datasource.url}")
    private String datasourceUrl;
    
    /**
     * 如果是 sqlite 数据库，自动创建数据库文件所在目录
     */
    @PostConstruct
    public void init() {
        if (StrUtil.equals(datasourceDriveClassName, "org.sqlite.JDBC")) {
            String path = datasourceUrl.replace("jdbc:sqlite:", "");
            String folderPath = FileUtil.getParent(path, 1);
            log.info("SQLite 数据库文件所在目录: [{}]", folderPath);
            if (!FileUtil.exist(folderPath)) {
                FileUtil.mkdir(folderPath);
                log.info("检测到 SQLite 数据库文件所在目录不存在, 已自动创建.");
            } else {
                log.info("检测到 SQLite 数据库文件所在目录已存在, 无需自动创建.");
            }
        }
    }
    
    @Bean
    public DatabaseIdProvider databaseIdProvider() {
        VendorDatabaseIdProvider databaseIdProvider = new VendorDatabaseIdProvider();
        Properties properties = new Properties();
        properties.setProperty("PostgreSQL", "postgresql");
        properties.setProperty("MySQL", "mysql");
        properties.setProperty("SQLite", "sqlite");
        databaseIdProvider.setProperties(properties);
        return databaseIdProvider;
    }
    
    /**
     * mybatis plus 分页插件配置
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() throws SQLException {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        String dbType = dataSource.getConnection().getMetaData().getDatabaseProductName();
        log.info("当前数据库类型: [{}]", dbType);
        
        // 添加分页插件
        PaginationInnerInterceptor paginationInterceptor = new PaginationInnerInterceptor();
        paginationInterceptor.setDbType(DbType.getDbType(dbType));
        interceptor.addInnerInterceptor(paginationInterceptor);
        return interceptor;
    }

    @Bean
    public com.baomidou.mybatisplus.core.config.GlobalConfig globalConfig() {
        com.baomidou.mybatisplus.core.config.GlobalConfig conf = new com.baomidou.mybatisplus.core.config.GlobalConfig();
        com.baomidou.mybatisplus.core.config.GlobalConfig.DbConfig dbConfig = new com.baomidou.mybatisplus.core.config.GlobalConfig.DbConfig();
        // 设置 id 类型为自增
        dbConfig.setIdType(com.baomidou.mybatisplus.annotation.IdType.AUTO);
        conf.setDbConfig(dbConfig);
        return conf;
    }

}