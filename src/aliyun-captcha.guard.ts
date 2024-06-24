import {CanActivate, ExecutionContext, Inject, Injectable} from '@nestjs/common'
import {Request} from 'express'
import {get} from 'lodash'
import {AliyunCaptchaOptions, MODULE_OPTIONS_TOKEN} from './aliyun-captcha-configure.module'
import {AliyunCaptchaService} from './aliyun-captcha.service'

@Injectable()
export class AliyunCaptchaGuard implements CanActivate {
  private readonly key: string
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: AliyunCaptchaOptions,
    private readonly aliyunCaptchaService: AliyunCaptchaService,
  ) {
    this.key = options.paramKey ?? 'captchaVerifyParam'
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType()
    if (type !== 'http') return false

    const req = context.switchToHttp().getRequest<Request>()

    const captchaVerifyParam = (get(req.query, this.key) || get(req.body, this.key)) as unknown
    if (typeof captchaVerifyParam !== 'string') return false

    return await this.aliyunCaptchaService.verify(captchaVerifyParam, this.options.sceneId)
  }
}
