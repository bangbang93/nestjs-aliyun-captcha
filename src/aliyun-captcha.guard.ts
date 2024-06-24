import {CanActivate, ExecutionContext, Inject, Injectable} from '@nestjs/common'
import {Request} from 'express'
import {AliyunCaptchaOptions, MODULE_OPTIONS_TOKEN} from './aliyun-captcha-configure.module'
import {AliyunCaptchaService} from './aliyun-captcha.service'

@Injectable()
export class AliyunCaptchaGuard implements CanActivate {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: AliyunCaptchaOptions,
    private readonly aliyunCaptchaService: AliyunCaptchaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType()
    if (type !== 'http') return false

    const req = context.switchToHttp().getRequest<Request>()

    const captchaVerifyParam = req.query.captchaVerifyParam || req.body.captchaVerifyParam
    if (!captchaVerifyParam) return false

    return await this.aliyunCaptchaService.verify(captchaVerifyParam, this.options.sceneId)
  }
}
