import {ConfigurableModuleBuilder} from '@nestjs/common'

export interface AliyunCaptchaOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint?: string
  connectTimeout?: number
  readTimeout?: number
  sceneId?: string
  paramKey?: string
}

export const {ConfigurableModuleClass, MODULE_OPTIONS_TOKEN} =
  new ConfigurableModuleBuilder<AliyunCaptchaOptions>().build()
