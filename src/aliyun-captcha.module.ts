import {Config} from '@alicloud/openapi-client'
import {Module} from '@nestjs/common'
import {AliyunCaptchaOptions, ConfigurableModuleClass, MODULE_OPTIONS_TOKEN} from './aliyun-captcha-configure.module'
import {AliyunCaptchaGuard} from './aliyun-captcha.guard'
import {AliyunCaptchaService} from './aliyun-captcha.service'

@Module({
  providers: [
    {
      provide: Config,
      inject: [MODULE_OPTIONS_TOKEN],
      useFactory: (options: AliyunCaptchaOptions) => {
        const config = new Config()
        config.accessKeyId = options.accessKeyId
        config.accessKeySecret = options.accessKeySecret
        config.endpoint = options.endpoint ?? 'captcha.cn-shanghai.aliyuncs.com'
        if (options.connectTimeout) config.connectTimeout = options.connectTimeout
        if (options.readTimeout) config.readTimeout = options.readTimeout
        return config
      },
    },
    AliyunCaptchaService,
    AliyunCaptchaGuard,
  ],
  exports: [AliyunCaptchaService, AliyunCaptchaGuard, MODULE_OPTIONS_TOKEN],
})
export class AliyunCaptchaModule extends ConfigurableModuleClass {}
