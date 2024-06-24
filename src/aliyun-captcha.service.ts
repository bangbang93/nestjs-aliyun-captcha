import Client, {VerifyCaptchaRequest} from '@alicloud/captcha20230305'
import {Config} from '@alicloud/openapi-client'
import {Inject, Injectable} from '@nestjs/common'
import {CaptchaError} from './captcha-error'
import {AliyunCaptchaOptions, MODULE_OPTIONS_TOKEN} from './index'

@Injectable()
export class AliyunCaptchaService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: AliyunCaptchaOptions,
    private readonly config: Config,
  ) {}

  public async verify(params: string, sceneId?: string): Promise<boolean> {
    const client = new Client(this.config)
    const request = new VerifyCaptchaRequest({
      sceneId: sceneId ?? this.options.sceneId,
    })
    request.captchaVerifyParam = params
    const res = await client.verifyCaptcha(request)
    if (res.body.result?.verifyResult) {
      return true
    }
    const verifyCode = res.body.result?.verifyCode as string
    if (verifyCode) {
      throw new CaptchaError(verifyCode)
    }
    return false
  }
}
