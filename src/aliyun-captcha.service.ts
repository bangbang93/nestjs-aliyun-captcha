import Client, {VerifyIntelligentCaptchaRequest} from '@alicloud/captcha20230305'
import {Config} from '@alicloud/openapi-client'
import {Inject, Injectable} from '@nestjs/common'
import {AliyunCaptchaOptions, MODULE_OPTIONS_TOKEN} from './aliyun-captcha-configure.module'
import {CaptchaError} from './captcha-error'

@Injectable()
export class AliyunCaptchaService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: AliyunCaptchaOptions,
    private readonly config: Config,
  ) {}

  public async verify(params: string, sceneId?: string): Promise<boolean> {
    const client = new Client(this.config)
    const request = new VerifyIntelligentCaptchaRequest({
      sceneId: sceneId ?? this.options.sceneId,
    })
    request.captchaVerifyParam = params
    const res = await client.verifyIntelligentCaptcha(request)
    if (res.body.result?.verifyResult) {
      return true
    }
    const verifyCode = res.body.result?.verifyCode
    if (verifyCode) {
      throw new CaptchaError(verifyCode)
    }
    return false
  }
}
