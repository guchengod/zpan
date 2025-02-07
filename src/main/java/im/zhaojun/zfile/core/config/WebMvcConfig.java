package im.zhaojun.zfile.core.config;

import im.zhaojun.zfile.module.storage.model.enums.StorageTypeEnum;
import io.undertow.UndertowOptions;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashSet;
import java.util.Set;

/**
 * ZFile Web 相关配置.
 *
 * @author zhaojun
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {


    /**
     * 添加自定义枚举格式化器.
     * @see StorageTypeEnum
     */
    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverterFactory(new StringToEnumConverterFactory());
    }


    /**
     * 支持 url 中传入 <>[\]^`{|} 这些特殊字符.
     */
    @Bean
    public ServletWebServerFactory webServerFactory() {
        UndertowServletWebServerFactory webServerFactory = new UndertowServletWebServerFactory();

        //tomcat 添加对 URL 中特殊符号的支持.
//        webServerFactory.addConnectorCustomizers(connector -> {
//            connector.setProperty("relaxedPathChars", "<>[\\]^`{|}%[]");
//            connector.setProperty("relaxedQueryChars", "<>[\\]^`{|}%[]");
//        });

        // 启用 HTTP/2 和 Brotli 压缩
        webServerFactory.addBuilderCustomizers(builder -> {
            builder.setServerOption(UndertowOptions.ENABLE_HTTP2, true);  // 启用 HTTP/2
            builder.setServerOption(UndertowOptions.HTTP2_SETTINGS_ENABLE_PUSH, true);  // 启用 HTTP/2 服务器推送
            builder.setServerOption(UndertowOptions.ENABLE_RFC6265_COOKIE_VALIDATION, true); // 允许 RFC 6265 Cookie 规则
        });
        return webServerFactory;
    }


    @Bean
    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerFactoryCustomizer(){
        return factory -> {
            ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/index.html");
            ErrorPage error200Page = new ErrorPage(HttpStatus.OK, "/index.html");
            Set<ErrorPage> errorPages = new HashSet<>();
            errorPages.add(error404Page);
            errorPages.add(error200Page);
            factory.setErrorPages(errorPages);
        };
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(3600)
                .resourceChain(true);
    }

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.mediaType("br", MediaType.valueOf("application/brotli"));
    }
    
    
    
    
}