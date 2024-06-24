/**
 * @see https://help.aliyun.com/zh/captcha/captcha2-0/user-guide/server-integration
 *
 * F001：验证不通过。
 *
 * F002：您传入的CaptchaVerifyParam参数为空。
 *
 * F003：您传入的CaptchaVerifyParam格式不合法，请参考集成文档检查您的集成代码。
 *
 * F004：控制台开启测试模式下的验证不通过。
 *
 * F005：场景ID不存在。
 *
 * F006：场景ID不归属该账户。
 *
 * F007：验证超出时间限制。
 *
 * F008：验证数据重复提交。
 *
 * F009：检测到虚拟设备环境，请使用真实设备。
 *
 * F010：同IP访问频率超出限制。
 *
 * F011：同设备访问频率超出限制。
 *
 * F012：您传入的SceneID与CaptchaVerifyParam内的场景ID不一致。
 *
 * F013：您传入的CaptchaVerifyParam缺少参数。
 */
const messages = new Map([
  ['F001', '验证不通过'],
  ['F002', '您传入的CaptchaVerifyParam参数为空'],
  ['F003', '您传入的CaptchaVerifyParam格式不合法，请参考集成文档检查您的集成代码'],
  ['F004', '控制台开启测试模式下的验证不通过'],
  ['F005', '场景ID不存在'],
  ['F006', '场景ID不归属该账户'],
  ['F007', '验证超出时间限制'],
  ['F008', '验证数据重复提交'],
  ['F009', '检测到虚拟设备环境，请使用真实设备'],
  ['F010', '同IP访问频率超出限制'],
  ['F011', '同设备访问频率超出限制'],
  ['F012', '您传入的SceneID与CaptchaVerifyParam内的场景ID不一致'],
  ['F013', '您传入的CaptchaVerifyParam缺少参数'],
])

export class CaptchaError extends Error {
  constructor(public readonly code: string) {
    super(messages.get(code) ?? '验证失败')
    this.name = 'CaptchaError'
  }
}
