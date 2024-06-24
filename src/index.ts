import {Config} from '@alicloud/openapi-client'
import {ConfigurableModuleBuilder, Module} from '@nestjs/common'
import {AliyunCaptchaService} from './aliyun-captcha.service'

export interface AliyunCaptchaOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint?: string
  connectTimeout?: number
  readTimeout?: number
  sceneId?: string
}

export const {ConfigurableModuleClass, MODULE_OPTIONS_TOKEN} =
  new ConfigurableModuleBuilder<AliyunCaptchaOptions>().build()

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
  ],
  exports: [AliyunCaptchaService],
})
export class AliyunCaptchaModule extends ConfigurableModuleClass {}
